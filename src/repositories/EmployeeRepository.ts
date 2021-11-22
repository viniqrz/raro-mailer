import { EntityRepository, Repository, UpdateResult } from "typeorm";
import { Employee } from "../models/EmployeeEntity";
import { IEmployeeRepository } from "../@types/repositories/IEmployeeRepository";

@EntityRepository(Employee)
export class EmployeeRepository
  extends Repository<Employee>
  implements IEmployeeRepository
{
  public async findAll(): Promise<Employee[]> {
    return await this.find();
  }

  public async updateById(id: number, entity: Employee): Promise<UpdateResult> {
    return await this.update({ id }, entity);
  }

  public async findById(id: number): Promise<Employee> {
    return await this.findOne({
      where: { id },
      relations: ["address", "actor"],
    });
  }

  public async findByEmail(email: string): Promise<Employee> {
    return await this.findOne({ where: email });
  }
}
