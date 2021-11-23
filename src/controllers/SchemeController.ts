import { Inject, Service } from "typedi";
import { NextFunction, Response } from "express";
import { ISchemeService } from "../@types/services/ISchemeService";
import { IRequest } from "../@types/express/request";

@Service("SchemeController")
export class SchemeController {
  constructor(
    @Inject("SchemeService")
    private schemeService: ISchemeService
  ) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(req: IRequest, res: Response, next: NextFunction) {
    try {
      const scheme = req.body;

      const savedScheme = await this.schemeService.create(scheme);

      res.status(200).json({
        status: "success",
        data: {
          scheme: savedScheme,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  public async getAll(req: IRequest, res: Response, next: NextFunction) {
    try {
      const schemes = await this.schemeService.getAll();

      res.status(200).json({
        status: "success",
        data: schemes,
      });
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const scheme = await this.schemeService.getById(Number(id));

      res.status(200).json({
        status: "success",
        data: { scheme },
      });
    } catch (err) {
      next(err);
    }
  }

  public async update(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const scheme = req.body;

      const savedScheme = await this.schemeService.update(Number(id), scheme);

      res.status(200).json({
        status: "success",
        data: { scheme: savedScheme },
      });
    } catch (err) {
      next(err);
    }
  }

  public async delete(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const scheme = await this.schemeService.delete(Number(id));

      res.status(200).json({
        status: "success",
        data: { scheme },
      });
    } catch (err) {
      next(err);
    }
  }
}
