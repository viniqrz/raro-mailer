import { IEmployeeRepository } from "../@types/repositories/IEmployeeRepository";
import { Employee } from "../models/EmployeeEntity";
import Container, { Inject, Service } from "typedi";
import { EmployeeDTO, UpdateEmployeeDTO } from "../@types/dto/EmployeeDto";
import { IEmployeeService } from "../@types/services/IEmployeeService";
import { ActorService } from "./ActorService";

@Service("EmployeeService")
export class EmployeeService implements IEmployeeService {
  constructor(
    @Inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  public async create(employeeData: EmployeeDTO): Promise<Employee> {
    try {
      const employee = await this.employeeFactory(employeeData);

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

  async update(id: number, employeeData: UpdateEmployeeDTO) {
    const currentEmployee = await this.employeeRepository.findById(id);

    const newEmployee = { ...currentEmployee, ...employeeData };

    return await this.employeeRepository.save(newEmployee);
  }

  async delete(id: number) {
    const employeeToRemove = await this.employeeRepository.findById(id);
    if (!employeeToRemove) {
      throw new Error("Employee not found!");
    }

    return await this.employeeRepository.remove(employeeToRemove);
  }

  private async employeeFactory(employeeDto: EmployeeDTO): Promise<Employee> {
    const employee = new Employee();

    if (!employeeDto.actorId) throw new Error("No actor id provided");

    Object.keys(employeeDto)
      .filter((key) => key !== "actorId")
      .forEach((key) => (employee[key] = employeeDto[key]));

    const actor = await Container.get<ActorService>("ActorService").getById(
      employeeDto.actorId
    );

    if (!actor) throw new Error("There's no actor with this id");

    employee.actor = actor;

    return employee;
  }
}
