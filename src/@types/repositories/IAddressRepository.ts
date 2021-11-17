import { Address } from "../../models/AddressEntity";

export interface IAddressRepository {
  save(address: Address): Promise<Address>;
  findAll(): Promise<Address[]>;
  findById(id: number): Promise<Address>;
  remove(address: Address): Promise<Address>;
}
