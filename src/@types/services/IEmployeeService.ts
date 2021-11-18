import { EmployeeDTO } from "../dto/EmployeeDto";
import { Employee } from "models/EmployeeEntity";

export interface IEmployeeService {
  create(employeeDto: EmployeeDTO): Promise<Employee>;
  getById(id: number): Promise<Employee>;
  getAll(): Promise<Employee[]>;
  update(employeeDto: EmployeeDTO): Promise<Employee>;
  delete(id: number): Promise<Employee>;
}