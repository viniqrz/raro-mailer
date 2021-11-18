import { Inject, Service } from "typedi";
import { IAddressService } from "../@types/services/IAddressService";
import { AddressDto } from "../@types/dto/AddressDto";
import { ICepClient } from "../@types/clients/ICepClient";

@Service('AddressService')
export class AddressService implements IAddressService {
  constructor(@Inject('CepClient') private cepClient: ICepClient) {}

  getByCep(cep: string): Promise<AddressDto> {
    return this.cepClient.getAddressByCEP(cep);
  }
}

