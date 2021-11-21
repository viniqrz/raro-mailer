import { IEmailRepository } from "../@types/repositories/IEmailRepository";
import { Email } from "../models/EmailEntity";
import { Inject, Service } from "typedi";
import { EmailDTO, UpdateEmailDTO } from "../@types/dto/EmailDto";
import { IEmailService } from "../@types/services/IEmailService";

@Service("EmailService")
export class EmailService implements IEmailService {
  constructor(
    @Inject("EmailRepository") private emailRepository: IEmailRepository
  ) {}

  public async create(emailDto: EmailDTO): Promise<Email> {
    try {
      const email = this.emailFactory(emailDto);

      const savedEmail = await this.emailRepository.save(email);

      return savedEmail;
    } catch (err) {
      throw new Error(`Couldn't create email: ${err.message}.`);
    }
  }

  public async getAll(): Promise<Email[]> {
    return await this.emailRepository.findAll();
  }

  public async getById(id: number): Promise<Email> {
    return await this.emailRepository.findById(id);
  }

  public async update(id: number, emailDto: UpdateEmailDTO): Promise<Email> {
    const currentEmail = await this.emailRepository.findById(id);

    const newEmail = { ...currentEmail, ...emailDto };

    return await this.emailRepository.save(newEmail);
  }

  public async delete(id: number): Promise<Email> {
    return await this.emailRepository.remove({ id } as Email);
  }

  private emailFactory(emailDto: EmailDTO): Email {
    const email = new Email();

    Object.keys(emailDto).forEach((key) => (email[key] = emailDto[key]));

    return email;
  }
}
