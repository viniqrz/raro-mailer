import { Inject, Service } from "typedi";
import { Response, NextFunction } from "express";
import { IActorService } from "../@types/services/IActorService";
import { IRequest } from "../@types/express/request";

@Service("ActorController")
export class ActorController {
  constructor(@Inject("ActorService") private actorService: IActorService) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req: IRequest, res: Response, next: NextFunction) {
    try {
      const actor = req.body;

      const savedActor = await this.actorService.create(actor);

      res.status(200).json({
        status: "success",
        data: {
          actor: savedActor,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  public async getAll(req: IRequest, res: Response, next: NextFunction) {
    try {
      const actors = await this.actorService.getAll();

      res.status(200).json({
        status: "success",
        data: actors,
      });
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const actor = await this.actorService.getById(Number(id));

      res.status(200).json({
        status: "success",
        data: { actor },
      });
    } catch (err) {
      next(err);
    }
  }

  public async update(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const actor = req.body;

      const savedActor = await this.actorService.update(Number(id), actor);

      res.status(200).json({
        status: "success",
        data: { actor: savedActor },
      });
    } catch (err) {
      next(err);
    }
  }

  public async delete(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const actor = await this.actorService.delete(Number(id));

      res.status(200).json({
        status: "success",
        data: { actor },
      });
    } catch (err) {
      next(err);
    }
  }
}
