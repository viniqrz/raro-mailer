import { Actor } from '../../models/ActorEntity';


export interface IActorRepository {

  save(actor:Actor):Promise<Actor>;
  remove(entity:Actor| Actor[]):Promise<Actor[]>;
  findAll():Promise<Actor[]>;
  findById(id:number):Promise<Actor>;
}
