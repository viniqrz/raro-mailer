import { UserDTO } from "../dto/UserDto";
import { Request } from "express";

export interface IRequest extends Request {
  user: UserDTO;
}
