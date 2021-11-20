import { EmailTemplate } from "models/EmailTemplateEntity";

export interface IEmailTemplateRepository {
  save(email: EmailTemplate): Promise<EmailTemplate>;
  findAll(): Promise<EmailTemplate[]>;
  findById(id: number): Promise<EmailTemplate>;
  remove(emailTemplate: EmailTemplate): Promise<EmailTemplate>;
}
