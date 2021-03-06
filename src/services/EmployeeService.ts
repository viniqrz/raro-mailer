import Container, { Inject, Service } from "typedi";
import { IEmployeeRepository } from "../@types/repositories/IEmployeeRepository";
import { Employee } from "../models/EmployeeEntity";
import { EmployeeDTO, UpdateEmployeeDTO } from "../@types/dto/EmployeeDto";
import { IEmployeeService } from "../@types/services/IEmployeeService";
import { ActorService } from "./ActorService";
import { Actor } from "../models/ActorEntity";
import { AddressService } from "./AddressService";
import { Address } from "../models/AddressEntity";

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

      const addressService = Container.get<AddressService>("AddressService");

      const actor = await this.validateActorId(employeeDto.actorId);
      const address = await addressService.create(employeeDto.address);

      const employee = this.employeeFactory(employeeDto, actor, address);
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
      const address = await addressService.updateByEmployeeId(id, dto.address);
      employee.address = address;
    }

    if ("actorId" in dto) {
      employee.actor = await this.validateActorId(dto.actorId);
    }

    return await this.employeeRepository.save(employee);
  }

  public async delete(id: number) {
    const addressService = Container.get<AddressService>("AddressService");
    await addressService.deleteByEmployeeId(id);

    return await this.employeeRepository.remove({ id } as Employee);
  }

  private async validateActorId(id: number): Promise<Actor> {
    const actor = await Container.get<ActorService>("ActorService").getById(id);

    if (!actor) throw new Error("There's no actor with this id");

    return actor;
  }

  private employeeFactory(
    employeeDto: EmployeeDTO,
    actor: Actor,
    address: Address
  ): Employee {
    const employee = new Employee();

    Object.keys(employeeDto)
      .filter((key) => key !== "actorId")
      .forEach((key) => (employee[key] = employeeDto[key]));

    employee.address = address;
    employee.actor = actor;

    return employee;
  }
}
