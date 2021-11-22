import Container, { Inject, Service } from "typedi";
import { IEmployeeRepository } from "../@types/repositories/IEmployeeRepository";
import { Employee } from "../models/EmployeeEntity";
import { EmployeeDTO, UpdateEmployeeDTO } from "../@types/dto/EmployeeDto";
import { IEmployeeService } from "../@types/services/IEmployeeService";
import { ActorService } from "./ActorService";
import { Actor } from "../models/ActorEntity";
import { AddressService } from "./AddressService";

@Service("EmployeeService")
export class EmployeeService implements IEmployeeService {
  constructor(
    @Inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  public async create(employeeDto: EmployeeDTO): Promise<Employee> {
    try {
      if (!employeeDto.actorId) throw new Error("No actor id provided");
      if (!employeeDto.address) throw new Error("No address provided");

      const actor = await this.validateActorId(employeeDto.actorId);

      const employee = this.employeeFactory(employeeDto, actor);

      const savedEmployee = await this.employeeRepository.save(employee);

      return savedEmployee;
    } catch (err) {
      throw new Error(`Couldn't create an employee: ${err.message}.`);
    }
  }

  public async getAll(): Promise<Employee[]> {
    return await this.employeeRepository.findAll();
  }

  public async getById(id: number): Promise<Employee> {
    return await this.employeeRepository.findById(id);
  }

  public async update(id: number, dto: UpdateEmployeeDTO): Promise<Employee> {
    const employee = { ...dto, id } as Employee;

    if ("address" in dto) {
      const addressService = Container.get<AddressService>("AddressService");
      await addressService.updateByEmployeeId(id, dto.address);
      delete employee.address;
    }

    if ("actorId" in dto) {
      employee.actor = await this.validateActorId(dto.actorId);
    }

    return await this.employeeRepository.save(employee);
  }

  public async delete(id: number) {
    return await this.employeeRepository.remove({ id } as Employee);
  }

  private async validateActorId(id: number): Promise<Actor> {
    const actor = await Container.get<ActorService>("ActorService").getById(id);

    if (!actor) throw new Error("There's no actor with this id");

    return actor;
  }

  private employeeFactory(employeeDto: EmployeeDTO, actor: Actor): Employee {
    const employee = new Employee();

    Object.keys(employeeDto)
      .filter((key) => key !== "actorId")
      .forEach((key) => (employee[key] = employeeDto[key]));

    employee.actor = actor;

    return employee;
  }
}
