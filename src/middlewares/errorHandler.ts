import { NextFunction, Response } from "express";
import { IRequest } from "../@types/express/request";

export function errorHandler(
  error: Error,
  req: IRequest,
  res: Response,
  next: NextFunction
) {
  res.status(404).json({
    status: "fail",
    message: error.message,
  });
}
