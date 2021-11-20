import { EmployeeDTO, UpdateEmployeeDTO } from "../dto/EmployeeDto";
import { Employee } from "models/EmployeeEntity";

export interface IEmployeeService {
  create(employeeDto: EmployeeDTO): Promise<Employee>;
  getById(id: number): Promise<Employee>;
  getAll(): Promise<Employee[]>;
  update(id: number, employeeDto: UpdateEmployeeDTO): Promise<Employee>;
  delete(id: number): Promise<Employee>;
}
