import { Service, Inject } from "typedi";
import { AddressDTO, UpdateAddressDTO } from "../@types/dto/AddressDto";
import { IAddressRepository } from "../@types/repositories/IAddressRepository";
import { IAddressService } from "../@types/services/IAddressService";
import { Address } from "../models/AddressEntity";

@Service("AddressService")
export class AddressService implements IAddressService {
  constructor(
    @Inject("AddressRepository") private addressRepository: IAddressRepository
  ) {}

  public async create(addressDto: AddressDTO): Promise<Address> {
    const address = this.addressFactory(addressDto);

    return await this.addressRepository.save(address);
  }

  public async getByEmployeeId(id: number): Promise<Address> {
    return await this.addressRepository.findByEmployeeId(id);
  }

  public async updateByEmployeeId(
    id: number,
    partial: UpdateAddressDTO
  ): Promise<Address> {
    const currentAddress = await this.getByEmployeeId(id);

    const newAddress = { ...currentAddress, ...partial };

    return await this.addressRepository.save(newAddress);
  }

  public async deleteByEmployeeId(id: number): Promise<Address> {
    const address = await this.getByEmployeeId(id);

    return await this.addressRepository.remove(address);
  }

  private addressFactory(addressDto: AddressDTO): Address {
    const address = new Address();

    Object.keys(addressDto).forEach((key) => (address[key] = addressDto[key]));

    return address;
  }
}
