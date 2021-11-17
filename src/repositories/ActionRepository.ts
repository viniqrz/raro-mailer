import { Action } from "models/ActionEntity";
import { EntityRepository, Repository } from "typeorm";

interface IActionRepository {
  save(action: Action): Promise<Action>;
  findAll(): Promise<Action[]>;
  findById(id: number): Promise<Action>;
  remove(action: Action): Promise<Action>;
}

@EntityRepository(Action)
export class ActionRepository
  extends Repository<Action>
  implements IActionRepository
{
  public async findAll(): Promise<Action[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<Action> {
    return await this.findOne(id);
  }
}
