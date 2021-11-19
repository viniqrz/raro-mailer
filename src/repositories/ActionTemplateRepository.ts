import { ActionTemplate } from "models/ActionTemplateEntity";
import { EntityRepository, Repository } from "typeorm";
import { IActionTemplateRepository } from "../@types/repositories/IActionTemplateRepository";

@EntityRepository(ActionTemplate)
export class ActionTemplateRepository
  extends Repository<ActionTemplate>
  implements IActionTemplateRepository
{
  public async findAll(): Promise<ActionTemplate[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<ActionTemplate> {
    return await this.findOne(id);
  }
}
