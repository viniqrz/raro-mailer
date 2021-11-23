import { Actor } from "../../models/ActorEntity";
import { Employee } from "../../models/EmployeeEntity";

export type ActionDTO = {
  id?: number;
  name: string;
  subject: string;
  body: string;
  date: Date;
  employee: Employee;
};

export type UpdateActionDTO = {
  name?: string;
  subject?: string;
  body?: string;
  actor?: Actor;
  date?: Date;
  employee?: Employee;
};
