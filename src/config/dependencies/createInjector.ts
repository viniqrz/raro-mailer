import Container from "typedi";

import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";
import { ActorRepository } from "../../repositories/ActorRepository";
import { EmailRepository } from "../../repositories/EmailRepository";
import { AddressRepository } from "../../repositories/AddressRepository";
import { ActionRepository } from "../../repositories/ActionRepository";
import { EmployeeRepository } from "../../repositories/EmployeeRepository";
import { SchemeRepository } from "../../repositories/SchemeRepository";
import { HistoryRepository } from "../../repositories/HistoryRepository";
import { ActionTemplateRepository } from "../../repositories/ActionTemplateRepository";
import { EmailTemplateRepository } from "../../repositories/EmailTemplate";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";
import "../../controllers/ActionTemplateController";
import "../../controllers/ActorController";
import "../../controllers/EmployeeController";
import "../../controllers/SchemeController";

// inicializa services
import "../../services/UserService";
import "../../services/ActionService";
import "../../services/ActionTemplateService";
import "../../services/ActorService";
import "../../services/EmailService";
import "../../services/EmailTemplateService";
import "../../services/HistoryService";
import "../../services/SchemeService";
import "../../services/EmployeeService";

// inicializa clientes
import "../../clients/CepClient";
import "../../infra/http/AxiosHttpClient";

const createDependencyInjector = () => {
  Container.set("UserRepository", getCustomRepository(UserRepository));
  Container.set("ActorRepository", getCustomRepository(ActorRepository));
  Container.set("EmailRepository", getCustomRepository(EmailRepository));
  Container.set("AddressRepository", getCustomRepository(AddressRepository));
  Container.set("ActionRepository", getCustomRepository(ActionRepository));
  Container.set("EmployeeRepository", getCustomRepository(EmployeeRepository));
  Container.set("SchemeRepository", getCustomRepository(SchemeRepository));
  Container.set("HistoryRepository", getCustomRepository(HistoryRepository));
  Container.set(
    "ActionTemplateRepository",
    getCustomRepository(ActionTemplateRepository)
  );
  Container.set(
    "EmailTemplateRepository",
    getCustomRepository(EmailTemplateRepository)
  );
};

export default createDependencyInjector;
