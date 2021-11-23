import Container from "typedi";

import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";
import { ActorRepository } from "../../repositories/ActorRepository";
import { AddressRepository } from "../../repositories/AddressRepository";
import { ActionRepository } from "../../repositories/ActionRepository";
import { EmployeeRepository } from "../../repositories/EmployeeRepository";
import { SchemeRepository } from "../../repositories/SchemeRepository";
import { BundleRepository } from "../../repositories/BundleRepository";
import { ActionTemplateRepository } from "../../repositories/ActionTemplateRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";
import "../../controllers/ActionTemplateController";
import "../../controllers/ActorController";
import "../../controllers/EmployeeController";
import "../../controllers/SchemeController";
import "../../controllers/BundleController";

// inicializa services
import "../../services/UserService";
import "../../services/ActionService";
import "../../services/ActionTemplateService";
import "../../services/ActorService";
import "../../services/BundleService";
import "../../services/SchemeService";
import "../../services/EmployeeService";
import "../../services/AddressService";

// inicializa clientes
import "../../clients/CepClient";
import "../../infra/http/AxiosHttpClient";

const createDependencyInjector = () => {
  Container.set("UserRepository", getCustomRepository(UserRepository));
  Container.set("ActorRepository", getCustomRepository(ActorRepository));
  Container.set("AddressRepository", getCustomRepository(AddressRepository));
  Container.set("ActionRepository", getCustomRepository(ActionRepository));
  Container.set("EmployeeRepository", getCustomRepository(EmployeeRepository));
  Container.set("SchemeRepository", getCustomRepository(SchemeRepository));
  Container.set("BundleRepository", getCustomRepository(BundleRepository));
  Container.set(
    "ActionTemplateRepository",
    getCustomRepository(ActionTemplateRepository)
  );
};

export default createDependencyInjector;
