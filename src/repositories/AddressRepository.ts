import { Address } from "../models/AddressEntity";
import { EntityRepository, Repository } from "typeorm";
import { IAddressRepository } from "../@types/repositories/IAddressRepository";
import { Employee } from "../models/EmployeeEntity";

@EntityRepository(Address)
export class AddressRepository
  extends Repository<Address>
  implements IAddressRepository
{
  public async findAll(): Promise<Address[]> {
    return await this.find();
  }

  public async findByEmployeeId(id: number): Promise<Address> {
    return await this.findOne({ where: { employee: { id } as Employee } });
  }

  public async deleteByEmployeeId(id: number): Promise<Address> {
    return await this.remove({ employee: { id } as Employee } as Address);
  }

  public async findById(id: number): Promise<Address> {
    return await this.findOne(id);
  }
}
