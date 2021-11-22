import { AddressDTO } from "../dto/AddressDto";
import { Address } from "../../models/AddressEntity";

export interface IAddressService {
  create(addressDto: AddressDTO): Promise<Address>;
}
