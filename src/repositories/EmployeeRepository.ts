import { EntityRepository, Repository } from 'typeorm';
import { Employee } from '../models/EmployeeEntity';
import { IEmployeeRepository } from '../@types/repositories/IEmployeeRepository';

@EntityRepository(Employee)
export class EmployeeRepository
extends Repository<Employee>
implements IEmployeeRepository {

  public async findAll(): Promise<Employee[]> {
   return await this.find();
  }
  
  public async findById(id: number): Promise<Employee> {
   return await this.findOne(id);
  }

  public async findByEmail(email: string): Promise<Employee> {
    return await this.findOne({ where: email });
  }
}
