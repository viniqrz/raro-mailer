import { AddressDto } from "../dto/AddressDto";

export interface IAddressService {
  getByCep(cep: string): Promise<AddressDto>;
}
