import { Action } from "../models/ActionEntity";
import { EntityRepository, Repository } from "typeorm";
import { IActionRepository } from "../@types/repositories/IActionRepository";

@EntityRepository(Action)
export class ActionRepository
  extends Repository<Action>
  implements IActionRepository
{
  public async findAll(): Promise<Action[]> {
    return await this.find();
  }

  public async saveMany(actions: Action[]): Promise<Action[]> {
    return await this.save(actions);
  }

  public async findById(id: number): Promise<Action> {
    return await this.findOne(id);
  }
}
