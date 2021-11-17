import { Address } from "models/AddressEntity";
import { EntityRepository, Repository } from "typeorm";
import { IAddressRepository } from "../@types/repositories/IAddressRepository";

@EntityRepository(Address)
export class AddressRepository
  extends Repository<Address>
  implements IAddressRepository
{
  public async findAll(): Promise<Address[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<Address> {
    return await this.findOne(id);
  }
}
