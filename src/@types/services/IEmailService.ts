import { EmailDTO, UpdateEmailDTO } from "../dto/EmailDto";
import { Email } from "models/EmailEntity";

export interface IEmailService {
  create(emailDto: EmailDTO): Promise<Email>;
  getById(id: number): Promise<Email>;
  getAll(): Promise<Email[]>;
  update(emailDto: UpdateEmailDTO): Promise<Email>;
  delete(email: EmailDTO): Promise<Email>;
}
