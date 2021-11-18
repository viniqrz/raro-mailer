import { Actor } from "models/ActorEntity";
import { Email } from "models/EmailEntity";
import { Employee } from "models/EmployeeEntity";

export type ActionDTO = {
  id?: number;
  name: string;
  email: Email;
  actor: Actor;
  employee: Employee;
};

export type UpdateActionDTO = {
  name?: string;
  email?: Email;
  actor?: Actor;
  employee?: Employee;
};
