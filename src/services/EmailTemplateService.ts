import { IEmailTemplateRepository } from "../@types/repositories/IEmailTemplateRepository";
import { EmailTemplate } from "models/EmailTemplateEntity";
import { Inject, Service } from "typedi";

import {
  EmailTemplateDTO,
  UpdateEmailTemplateDTO,
} from "../@types/dto/EmailTemplateDto";

import { IEmailTemplateService } from "../@types/services/IEmailTemplateService";

@Service("EmailTemplateService")
export class EmailTemplateService implements IEmailTemplateService {
  constructor(
    @Inject("EmailTemplateRepository")
    private emailTemplateRepository: IEmailTemplateRepository
  ) {}

  public async create(
    EmailTemplateDto: EmailTemplateDTO
  ): Promise<EmailTemplate> {
    try {
      const EmailTemplate = this.EmailTemplateFactory(EmailTemplateDto);

      const savedEmailTemplate = await this.emailTemplateRepository.save(
        EmailTemplate
      );

      return savedEmailTemplate;
    } catch (err) {
      throw new Error(`Couldn't create EmailTemplate: ${err.message}.`);
    }
  }

  public async getAll(): Promise<EmailTemplate[]> {
    return await this.emailTemplateRepository.findAll();
  }

  public async getById(id: number): Promise<EmailTemplate> {
    return await this.emailTemplateRepository.findById(id);
  }

  public async update(
    id: number,
    EmailTemplateDto: UpdateEmailTemplateDTO
  ): Promise<EmailTemplate> {
    const currentEmailTemplate = await this.emailTemplateRepository.findById(
      id
    );

    const newEmailTemplate = { ...currentEmailTemplate, ...EmailTemplateDto };

    return await this.emailTemplateRepository.save(newEmailTemplate);
  }

  public async delete(id: number): Promise<EmailTemplate> {
    return await this.emailTemplateRepository.remove({ id } as EmailTemplate);
  }

  private EmailTemplateFactory(
    EmailTemplateDto: EmailTemplateDTO
  ): EmailTemplate {
    const emailTemplate = new EmailTemplate();

    Object.keys(EmailTemplateDto).forEach(
      (key) => (emailTemplate[key] = EmailTemplateDto[key])
    );

    return emailTemplate;
  }
}
