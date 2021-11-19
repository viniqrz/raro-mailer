import { Inject, Service } from "typedi";
import { CepNaoEncontrado } from "../@types/errors/CepNaoEncontrado";
import { AddressDto } from "../@types/dto/AddressDto";
import { ICepClient } from "../@types/clients/ICepClient";
import { HttpClient } from "../infra/http/types/HttpClient";

@Service("CepClient")
export class CepClient implements ICepClient {
  private API_CEP = `${process.env.BASE_API_CEP}/[CEP]/json/`;
  constructor(@Inject("HttpClient") private httpClient: HttpClient) {}

<<<<<<< HEAD
  async buscaEnderecoPorCEP(cep: string): Promise<EnderecoDto> {
    const url = this.API_CEP.replace("[CEP]", cep);
    const response = await this.httpClient.get<EnderecoDto>(url);
    const endereco = response.data;

    if (!endereco.cep) {
=======
  async getAddressByCEP(cep: string): Promise<AddressDto> {
    const url = this.API_CEP.replace('[CEP]', cep);
    const response = await this.httpClient.get<AddressDto>(url);
    const address = response.data;
    if (!address.cep) {
>>>>>>> 3316a5f04b1d28fe9b7e2ebdc29936a1068aa66a
      throw new CepNaoEncontrado();
    }

    return response.data;
  }
}
