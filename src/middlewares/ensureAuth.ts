import { NextFunction, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { IRequest } from "../@types/express/request";
import { verifyToken } from "../helpers/verifyToken";

export function ensureAuth(req: IRequest, res: Response, next: NextFunction) {
  try {
    const bearer = req.headers.authorization;

    if (!bearer) throw new Error("No token sent");

    const [, token] = bearer.split(" ");

    const { data } = verifyToken(token) as JwtPayload;

    req.user = data;

    next();
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: `Access denied: ${err.message}.`,
    });
  }
}
