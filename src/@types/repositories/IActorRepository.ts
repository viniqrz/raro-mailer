import { ActorDTO } from '../dto/ActorDTO';
import { Actor } from '../../models/ActorEntity';



export interface IActorRepository {

  save(actorDTO:ActorDTO):Promise<Actor>;
  remove(entity:Actor| Actor[]):Promise<Actor[]>;
  findAll():Promise<Actor[]>;
  findById(id:number):Promise<Actor>;

}
