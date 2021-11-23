import { Inject, Service } from "typedi";
import { NextFunction, Response } from "express";
import { IBundleService } from "../@types/services/IBundleService";
import { IRequest } from "../@types/express/request";

@Service("BundleController")
export class BundleController {
  constructor(
    @Inject("BundleService")
    private bundleService: IBundleService
  ) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(req: IRequest, res: Response, next: NextFunction) {
    try {
      const bundle = req.body;

      const savedBundle = await this.bundleService.create(bundle);

      res.status(200).json({
        status: "success",
        data: {
          bundle: savedBundle,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  public async getAll(req: IRequest, res: Response, next: NextFunction) {
    try {
      const bundles = await this.bundleService.getAll();

      res.status(200).json({
        status: "success",
        data: bundles,
      });
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const bundle = await this.bundleService.getById(Number(id));

      res.status(200).json({
        status: "success",
        data: { bundle },
      });
    } catch (err) {
      next(err);
    }
  }

  public async update(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const bundle = req.body;

      const savedBundle = await this.bundleService.update(Number(id), bundle);

      res.status(200).json({
        status: "success",
        data: { bundle: savedBundle },
      });
    } catch (err) {
      next(err);
    }
  }

  public async delete(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const bundle = await this.bundleService.delete(Number(id));

      res.status(200).json({
        status: "success",
        data: { bundle },
      });
    } catch (err) {
      next(err);
    }
  }
}
