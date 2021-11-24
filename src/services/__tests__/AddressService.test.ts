// import * as faker from 'faker';
// import { CepClient } from '../../clients/CepClient';
// import { AddressService } from '../AddressService';
// import { AddressDto } from '../../@types/dto/AddressDto';

// const resultadoApiCepFactory = (): AddressDto => ({
//   cep: faker.address.zipCode(),
//   logradouro: faker.lorem.sentence(),
//   complemento: faker.lorem.sentence(),
//   bairro: faker.lorem.word(),
//   localidade: faker.lorem.sentence(),
//   uf: faker.lorem.sentence(),
//   ibge: faker.lorem.sentence(),
//   gia: faker.lorem.sentence(),
//   ddd: faker.lorem.sentence(),
//   siafi: faker.lorem.sentence(),
// });

// describe('AddressService', () => {
//   let cepClient: CepClient;
//   let addressService: AddressService;

//   const oldEnv = process.env;
//   beforeEach(() => {
//     process.env.CRYPTO_ALGORITHM = 'SHA256';
//     process.env.SECRET = faker.datatype.uuid();
//     process.env.AUTH_SECRET = faker.datatype.uuid();
//   });
//   afterEach(() => {
//     process.env = oldEnv;
//   });

//   beforeEach(() => {
//     cepClient = new CepClient(null);
//     addressService = new AddressService(
//       cepClient
//     )
//   })

//   beforeEach(jest.clearAllMocks);

//   it('deve buscar um endereço através do CEP', async () => {
//     const address: AddressDto = resultadoApiCepFactory();
//     jest.spyOn(cepClient, 'getAddressByCEP').mockResolvedValue(address);

//     const cep = faker.address.zipCode();
//     await addressService.getByCep(cep);

//     expect(cepClient.getAddressByCEP).toHaveBeenCalledWith(cep);
//   });
// });
