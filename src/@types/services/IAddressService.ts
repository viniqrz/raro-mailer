import { AddressDTO, UpdateAddressDTO } from "../dto/AddressDto";
import { Address } from "../../models/AddressEntity";

export interface IAddressService {
  create(addressDto: AddressDTO): Promise<Address>;
  updateByEmployeeId(id: number, partial: UpdateAddressDTO): Promise<Address>;
  deleteByEmployeeId(id: number): Promise<Address>;
}
