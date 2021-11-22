import { Inject, Service } from "typedi";
import { Request, Response, NextFunction } from "express";
import { IEmployeeService } from "../@types/services/IEmployeeService";

@Service("EmployeeController")
export class EmployeeController {
  constructor(
    @Inject("EmployeeService") private employeeService: IEmployeeService
  ) {
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const employee = req.body;

      const savedEmployee = await this.employeeService.create(employee);

      res.status(200).json({
        status: "success",
        data: {
          employee: savedEmployee,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const employees = await this.employeeService.getAll();

      res.status(200).json({
        status: "success",
        data: employees,
      });
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const employee = await this.employeeService.getById(Number(id));

      res.status(200).json({
        status: "success",
        data: { employee },
      });
    } catch (err) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const employee = req.body;

      const savedEmployee = await this.employeeService.update(
        Number(id),
        employee
      );

      res.status(200).json({
        status: "success",
        data: { employee: savedEmployee },
      });
    } catch (err) {
      next(err);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const employee = await this.employeeService.delete(Number(id));

      res.status(200).json({
        status: "success",
        data: { employee },
      });
    } catch (err) {
      next(err);
    }
  }
}
