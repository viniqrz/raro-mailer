import { ActorDTO } from '../dto/ActorDto';
import { Actor } from '../../models/ActorEntity';

export interface IActorRepository {
  save(actorDTO: ActorDTO): Promise<Actor>;
  remove(entity: Actor): Promise<Actor>;
  findAll(): Promise<Actor[]>;
  findById(id: number): Promise<Actor>;
}
