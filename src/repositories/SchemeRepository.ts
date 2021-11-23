import { EntityRepository, Repository } from "typeorm";
import { Scheme } from "../models/SchemeEntity";
import { ISchemeRepository } from "../@types/repositories/ISchemeRepository";

@EntityRepository(Scheme)
export class SchemeRepository
  extends Repository<Scheme>
  implements ISchemeRepository
{
  public async findAll(): Promise<Scheme[]> {
    return await this.find({ relations: ["actionTemplates"] });
  }

  public async findById(id: number): Promise<Scheme> {
    return await this.findOne({
      where: { id },
      relations: ["actionTemplates"],
    });
  }
}
