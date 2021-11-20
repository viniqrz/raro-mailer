import { EmailTemplate } from "models/EmailTemplateEntity";
import { EntityRepository, Repository } from "typeorm";
import { IEmailTemplateRepository } from "../@types/repositories/IEmailTemplateRepository";

@EntityRepository(EmailTemplate)
export class EmailTemplateRepository
  extends Repository<EmailTemplate>
  implements IEmailTemplateRepository
{
  public async findAll(): Promise<EmailTemplate[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<EmailTemplate> {
    return await this.findOne(id);
  }
}
