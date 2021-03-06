import { Actor } from "../models/ActorEntity";
import { EntityRepository, Repository } from "typeorm";
import { IActorRepository } from "../@types/repositories/IActorRepository";

@EntityRepository(Actor)
export class ActorRepository
  extends Repository<Actor>
  implements IActorRepository
{
  public async findAll(): Promise<Actor[]> {
    return await this.find();
  }
  
  public async findById(id: number): Promise<Actor> {
    return await this.findOne(id);
  }
  
  public async findByEmail(email: string): Promise<Actor> {
    return await this.findOne({ where: email });
  }
}

