import * as faker from 'faker';
import { Response } from '../../infra/http/types/Response';
import { AxiosHttpClient } from '../../infra/http/AxiosHttpClient';
import { AddressDto } from '../../@types/dto/AddressDto';
import { HttpClient } from '../../infra/http/types/HttpClient';
import { CepClient } from '../CepClient';
import { CepNaoEncontrado } from '../../@types/errors/CepNaoEncontrado';

const httpSuccessfullResponseFactory = <T>(data: T): Response<T> => ({
  data,
  status: 200,
  statusText: 'success',
  headers: {}
});

describe('CepClient', () => {
  let address: AddressDto;
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = new AxiosHttpClient();
    address = {
      cep: faker.address.zipCode(),
      logradouro: faker.address.streetAddress(),
      complemento: faker.lorem.word(),
      bairro: faker.lorem.word(),
      localidade: faker.lorem.word(),
      uf: faker.lorem.word(),
      ibge: faker.lorem.word(),
      gia: faker.lorem.word(),
      ddd: faker.lorem.word(),
      siafi: faker.lorem.word(),
    };
  });
  beforeEach(jest.clearAllMocks);

  it('deve retornar dados do cep encontrados com sucesso.', async () => {
    const cep = faker.address.zipCode();
    const resultadoEsperado = httpSuccessfullResponseFactory(address);
    jest.spyOn(httpClient, 'get').mockResolvedValue(resultadoEsperado);

    const cepClient = new CepClient(httpClient);
    const response = await cepClient.getAddressByCEP(cep);

    expect(response).toBe(address);
    expect(httpClient.get).toHaveBeenCalledWith(expect.stringMatching(new RegExp(cep)));
  });

  it('Deve lançar um erro quando o cep não for encontrado', async () => {
    const cep = faker.address.zipCode();
    // não possui cep no endereço.
    const resultadoEsperado = httpSuccessfullResponseFactory({});
    jest.spyOn(httpClient, 'get').mockResolvedValue(resultadoEsperado);

    const cepClient = new CepClient(httpClient);
    await expect(cepClient.getAddressByCEP(cep))
      .rejects
      .toThrow(new CepNaoEncontrado());
  });
});
