import {
  EmailTemplateDTO,
  UpdateEmailTemplateDTO,
} from "../dto/EmailTemplateDto";

import { EmailTemplate } from "../../models/EmailTemplateEntity";

export interface IEmailTemplateService {
  create(EmailTemplateDto: EmailTemplateDTO): Promise<EmailTemplate>;
  getById(id: number): Promise<EmailTemplate>;
  getAll(): Promise<EmailTemplate[]>;
  update(
    id: number,
    EmailTemplateDto: UpdateEmailTemplateDTO
  ): Promise<EmailTemplate>;
  delete(id: number): Promise<EmailTemplate>;
}
