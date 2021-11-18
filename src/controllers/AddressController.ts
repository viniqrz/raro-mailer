import { Inject, Service } from "typedi";
import {Request, Response} from "express";
import { IAddressService } from "../@types/services/IAddressService";

@Service('AddressController')
export class AddressController {

  constructor(@Inject('AddressService') private addressService: IAddressService) {}

  async get(request: Request, response: Response) {
    const address = await this.addressService.getByCep(request.params.cep);
    response.send(address);
  }
}
