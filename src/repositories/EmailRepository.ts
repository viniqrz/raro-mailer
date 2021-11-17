import { Email } from "../models/EmailEntity";
import { EntityRepository, Repository } from "typeorm";

interface IEmailRepository {
  save(email: Email): Promise<Email>;
  findAll(): Promise<Email[]>;
  findById(id: number): Promise<Email>;
  remove(email: Email): Promise<Email>;
}

@EntityRepository(Email)
export class EmailRepository
  extends Repository<Email>
  implements IEmailRepository
{
  public async findAll(): Promise<Email[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<Email> {
    return await this.findOne(id);
  }
}
