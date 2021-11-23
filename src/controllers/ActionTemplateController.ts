import { Inject, Service } from "typedi";
import { NextFunction, Response } from "express";
import { IActionTemplateService } from "../@types/services/IActionTemplateService";
import { IRequest } from "../@types/express/request";

@Service("ActionTemplateController")
export class ActionTemplateController {
  constructor(
    @Inject("ActionTemplateService")
    private actionTemplateService: IActionTemplateService
  ) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(req: IRequest, res: Response, next: NextFunction) {
    try {
      const action = req.body;

      const actionTemplate = await this.actionTemplateService.create(action);

      res.status(200).json({
        status: "success",
        data: {
          actionTemplate,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  public async getAll(req: IRequest, res: Response, next: NextFunction) {
    try {
      const actionTemplates = await this.actionTemplateService.getAll();

      res.status(200).json({
        status: "success",
        data: actionTemplates,
      });
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const actionTemplate = await this.actionTemplateService.getById(
        Number(id)
      );

      res.status(200).json({
        status: "success",
        data: { actionTemplate },
      });
    } catch (err) {
      next(err);
    }
  }

  public async update(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const action = req.body;

      const actionTemplate = await this.actionTemplateService.update(
        Number(id),
        action
      );

      res.status(200).json({
        status: "success",
        data: { actionTemplate },
      });
    } catch (err) {
      next(err);
    }
  }

  public async delete(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const actionTemplate = await this.actionTemplateService.delete(
        Number(id)
      );

      res.status(200).json({
        status: "success",
        data: { actionTemplate },
      });
    } catch (err) {
      next(err);
    }
  }
}
