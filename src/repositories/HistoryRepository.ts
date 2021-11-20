import { History } from "../models/HistoryEntity";
import { EntityRepository, Repository } from "typeorm";
import { IHistoryRepository } from "../@types/repositories/IHistoryRepository";

@EntityRepository(History)
export class HistoryRepository
  extends Repository<History>
  implements IHistoryRepository
{
  public async findAll(): Promise<History[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<History> {
    return await this.findOne(id);
  }
}
