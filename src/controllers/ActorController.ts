import { Inject, Service } from "typedi";
import {Request, Response, NextFunction} from "express";
import { IActorService } from "../@types/services/IActorService";

@Service("ActorController")
export class ActorController {
  constructor(@Inject("ActorService") private actorService: IActorService) {}

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { actor } = request.body;

      const actorAlreadyExists = await this.actorService.getByEmail(
        actor.email
      );

      if (actorAlreadyExists) {
        return response.status(400).json({
          error: `Actor already exists.`,
        });
      }

      const savedActor = await this.actorService.create(actor);

      response.status(200).json({
        status: "success",
        data: {
          scheme: savedActor,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
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

  public async getById(req: Request, res: Response, next: NextFunction) {
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

  public async getByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.params;

      const actor = await this.actorService.getByEmail(email);

      res.status(200).json({
        status: "success",
        data: { actor },
      });
    } catch (err) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { actor } = req.body;

      const savedActor = await this.actorService.update(Number(id), actor);

      res.status(200).json({
        status: "success",
        data: { actor: savedActor },
      });
    } catch (err) {
      next(err);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
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