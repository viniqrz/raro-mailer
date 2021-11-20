import { IActorRepository } from "../@types/repositories/IActorRepository";
import { Actor } from "../models/ActorEntity";
import { Inject, Service } from "typedi";
import { ActorDTO, UpdateActorDTO } from "../@types/dto/ActorDto";
import { IActorService } from "../@types/services/IActorService";

@Service("ActorService")
export class ActorService implements IActorService {
  constructor(
    @Inject("ActorRepository") private actorRepository: IActorRepository
  ) {}

  public async create(actorData: ActorDTO): Promise<Actor> {
    try {
      const actor = this.actorFactory(actorData);

      const savedActor = await this.actorRepository.save(actor);

      return savedActor;
    } catch (err) {
      throw new Error(`Couldn't create an actor: ${err.message}.`);
    }
  }

  public async getAll(): Promise<Actor[]> {
    return await this.actorRepository.findAll();
  }

  public async getById(id: number): Promise<Actor> {
    return await this.actorRepository.findById(id);
  }

  public async getByEmail(email: string): Promise<Actor> {
    return await this.actorRepository.findByEmail(email);
  }

  async update(id: number, actorData: UpdateActorDTO) {
    const currentActor = await this.actorRepository.findById(id);

    const newActor = { ...currentActor, ...actorData };

    return await this.actorRepository.save(newActor);
  }

  async delete(id: number) {
    const actorToRemove = await this.actorRepository.findById(id);
    if (!actorToRemove) {
      throw new Error("Actor not found!");
    }

    return await this.actorRepository.remove(actorToRemove);
  }

  private actorFactory(actorDto: ActorDTO): Actor {
    const actor = new Actor();

    Object.keys(actorDto).forEach((key) => (actor[key] = actorDto[key]));

    return actor;
  }
}
