import { Inject, Service } from "typedi";
import {Request, Response, NextFunction} from "express";
import { IEmployeeService } from "../@types/services/IEmployeeService";

@Service("EmployeeController")
export class EmployeeController {
  constructor(@Inject("EmployeeService") private employeeService: IEmployeeService) {}

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { employee } = request.body;

      const employeeAlreadyExists = await this.employeeService.getByEmail(
        employee.email
      );

      if (employeeAlreadyExists) {
        return response.status(400).json({
          error: `Employee already exists.`,
        });
      }

      const savedEmployee = await this.employeeService.create(employee);

      response.status(200).json({
        status: "success",
        data: {
          scheme: savedEmployee,
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

  public async getByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.params;

      const employee = await this.employeeService.getByEmail(email);

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
      const { employee } = req.body;

      const savedEmployee = await this.employeeService.update(Number(id), employee);

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