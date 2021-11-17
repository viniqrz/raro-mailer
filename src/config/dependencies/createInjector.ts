import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UserRepository } from "../../repositories/UserRepository";
import { EmailRepository } from "repositories/EmailRepository";
import { AddressRepository } from "repositories/AddressRepository";
import { ActionRepository } from "repositories/ActionRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";
import "../../controllers/EnderecoController";

// inicializa services
import "../../services/UserService";
import "../../services/EnderecoService";

// inicializa clientes
import "../../clients/CepClient";
import "../../infra/http/AxiosHttpClient";

const createDependencyInjector = () => {
  Container.set("UserRepository", getCustomRepository(UserRepository));
  Container.set("EmailRepository", getCustomRepository(EmailRepository));
  Container.set("AddressRepository", getCustomRepository(AddressRepository));
  Container.set("ActionRepository", getCustomRepository(ActionRepository));
};

export default createDependencyInjector;
