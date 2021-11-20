import { IEmployeeRepository } from "../@types/repositories/IEmployeeRepository";
import { Employee } from "models/EmployeeEntity";
import { Inject, Service } from "typedi";
import { EmployeeDTO, UpdateEmployeeDTO } from "../@types/dto/EmployeeDto";
import { IEmployeeService } from "../@types/services/IEmployeeService";

@Service("EmployeeService")
export class EmployeeService implements IEmployeeService {
  constructor(
    @Inject("EmployeeRepository")
    private employeeRepository: IEmployeeRepository
  ) {}

  public async create(employeeData: EmployeeDTO): Promise<Employee> {
    try {
      const employee = this.employeeFactory(employeeData);

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

  private employeeFactory(employeeDto: EmployeeDTO): Employee {
    const employee = new Employee();

    Object.keys(employeeDto).forEach(
      (key) => (employee[key] = employeeDto[key])
    );

    return employee;
  }
}
