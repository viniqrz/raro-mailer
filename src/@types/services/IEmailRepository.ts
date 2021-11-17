import { Email } from "models/EmailEntity";

export interface IEmailRepository {
  save(email: Email): Promise<Email>;
  findAll(): Promise<Email[]>;
  findById(id: number): Promise<Email>;
  remove(email: Email): Promise<Email>;
}
