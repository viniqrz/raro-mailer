import { Email } from "models/EmailEntity";
import { Inject, Service } from "typedi";
import { EmailDTO, UpdateEmailDTO } from "../@types/dto/EmailDto";

interface IEmailService {
  create(emailDto: EmailDTO): Promise<Email>;
  getById(id: number): Promise<Email>;
  getAll(): Promise<Email[]>;
  update(emailDto: UpdateEmailDTO): Promise<Email>;
  delete(email: EmailDTO): Promise<Email>;
}

/**
 * tipo de emailRepository está any porque o repositório ainda não passou em review
 */
@Service("EmailService")
export class EmailService implements IEmailService {
  constructor(@Inject("EmailRepository") private emailRepository: any) {}

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

  public async update(emailDto: UpdateEmailDTO): Promise<Email> {
    const curEmail = await this.emailRepository.findById(emailDto.id);

    const newEmail = { ...curEmail, ...emailDto };

    return await this.emailRepository.save(newEmail);
  }

  public async delete(email: EmailDTO): Promise<Email> {
    return await this.emailRepository.remove(email);
  }

  private emailFactory(emailDto): Email {
    const email = new Email();

    Object.keys(emailDto).forEach((k) => (email[k] = emailDto[k]));

    return email;
  }
}
