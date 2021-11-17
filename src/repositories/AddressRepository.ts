import { Address } from "models/AddressEntity";
import { EntityRepository, Repository } from "typeorm";

interface IAddressRepository {
  save(address: Address): Promise<Address>;
  findAll(): Promise<Address[]>;
  findById(id: number): Promise<Address>;
  remove(address: Address): Promise<Address>;
}

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
