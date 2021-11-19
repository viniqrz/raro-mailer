import { SchemeDTO } from "../dto/SchemeDto";
import { Scheme } from "models/SchemeEntity";

export interface ISchemeService {
  create(schemeDto: SchemeDTO): Promise<Scheme>;
  getById(id: number): Promise<Scheme>;
  getAll(): Promise<Scheme[]>;
  update(schemeDto: SchemeDTO): Promise<Scheme>;
  delete(id: number): Promise<Scheme>;
}