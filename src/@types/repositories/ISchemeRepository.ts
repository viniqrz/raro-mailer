import { Scheme } from '../../models/SchemeEntity';

export interface ISchemeRepository {
  save(scheme: Scheme): Promise<Scheme>;
  remove(scheme: Scheme): Promise<Scheme>;
  findAll(): Promise<Scheme[]>;
  findById(id: number): Promise<Scheme>;
}