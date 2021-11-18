import { Employee } from '../../models/EmployeeEntity';

export interface IEmployeeRepository {
  save(employee:Employee):Promise<Employee>;
  remove(Employee:Employee):Promise<Employee>;
  findAll():Promise<Employee[]>;
  findById(id:number):Promise<Employee>;
}
