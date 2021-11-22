import { Inject, Service } from "typedi";
import { NextFunction, Response } from "express";
import { IUserService } from "../@types/services/IUserService";
import { IRequest } from "../@types/express/request";

@Service("UserController")
export class UserController {
  constructor(@Inject("UserService") private userService: IUserService) {
    this.signup = this.signup.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  public async signup(req: IRequest, res: Response, next: NextFunction) {
    try {
      const user = req.body;

      const userWithoutPassword = await this.userService.signup(user);

      res.status(200).json({
        status: "success",
        data: {
          user: userWithoutPassword,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  public async authenticate(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const { user, token } = await this.userService.authenticate(
        email,
        password
      );

      res.status(200).json({
        status: "success",
        data: {
          user,
          token,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  public async getAll(req: IRequest, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getAll();

      res.status(200).json({
        status: "success",
        data: users,
      });
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const user = await this.userService.getById(Number(id));

      res.status(200).json({
        status: "success",
        data: { user },
      });
    } catch (err) {
      next(err);
    }
  }

  public async update(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = req.body;

      const updatedUser = await this.userService.update(Number(id), user);

      res.status(200).json({
        status: "success",
        data: { user: updatedUser },
      });
    } catch (err) {
      next(err);
    }
  }

  public async delete(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const user = await this.userService.delete(Number(id));

      res.status(200).json({
        status: "success",
        data: { user },
      });
    } catch (err) {
      next(err);
    }
  }
}
