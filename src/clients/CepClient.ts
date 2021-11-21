// import { Inject, Service } from "typedi";
// import { CepNaoEncontrado } from "../@types/errors/CepNaoEncontrado";
// import { AddressDto } from "../@types/dto/AddressDto";
// import { ICepClient } from "../@types/clients/ICepClient";
// import { HttpClient } from "../infra/http/types/HttpClient";

// @Service("CepClient")
// export class CepClient implements ICepClient {
//   private API_CEP = `${process.env.BASE_API_CEP}/[CEP]/json/`;
//   constructor(@Inject("HttpClient") private httpClient: HttpClient) {}

//   async buscaEnderecoPorCEP(cep: string): Promise<AddressDto> {
//     const url = this.API_CEP.replace("[CEP]", cep);
//     const response = await this.httpClient.get<AddressDto>(url);
//     const endereco = response.data;

//     if (!endereco.cep) {
//       throw new CepNaoEncontrado();
//     }

//     return response.data;
//   }
// }
