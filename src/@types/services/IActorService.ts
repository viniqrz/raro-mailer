import { ActorDTO } from "../dto/ActorDto";
import { Actor } from "models/ActorEntity";

export interface IActorService {
  create(actorDto: ActorDTO): Promise<Actor>;
  getById(id: number): Promise<Actor>;
  getAll(): Promise<Actor[]>;
  update(actorDto: ActorDTO): Promise<Actor>;
  delete(id: number): Promise<Actor>;
}