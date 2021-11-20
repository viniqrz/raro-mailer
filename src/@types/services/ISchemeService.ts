import { SchemeDTO, UpdateSchemeDTO } from "../dto/SchemeDto";
import { Scheme } from "models/SchemeEntity";

export interface ISchemeService {
  create(schemeDto: SchemeDTO): Promise<Scheme>;
  getById(id: number): Promise<Scheme>;
  getAll(): Promise<Scheme[]>;
  update(id: number, schemeDto: UpdateSchemeDTO): Promise<Scheme>;
  delete(id: number): Promise<Scheme>;
}
