import { Bundle } from "../models/BundleEntity";
import { EntityRepository, Repository } from "typeorm";
import { IBundleRepository } from "../@types/repositories/IBundleRepository";

@EntityRepository(Bundle)
export class BundleRepository
  extends Repository<Bundle>
  implements IBundleRepository
{
  public async findAll(): Promise<Bundle[]> {
    return await this.find();
  }

  public async findById(id: number): Promise<Bundle> {
    return await this.findOne(id);
  }
}
