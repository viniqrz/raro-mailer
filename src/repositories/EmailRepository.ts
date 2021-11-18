import { Email } from "../models/EmailEntity";
import { EntityRepository, Repository } from "typeorm";
import { IEmailRepository } from "../@types/repositories/IEmailRepository";

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
