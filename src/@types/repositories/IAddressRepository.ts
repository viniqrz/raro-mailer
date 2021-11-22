import { Address } from "../../models/AddressEntity";
import { UpdateAddressDTO } from "../dto/AddressDto";

export interface IAddressRepository {
  save(address: Address): Promise<Address>;
  findAll(): Promise<Address[]>;
  findById(id: number): Promise<Address>;
  remove(address: Address): Promise<Address>;
  findByEmployeeId(id: number): Promise<Address>;
  updateByEmployeeId(id: number, partial: UpdateAddressDTO): Promise<Address>;
}
