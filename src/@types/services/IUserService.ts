import { UserDTO } from "../dto/UserDto";
import { User } from "../../models/UserEntity";

export interface IUserService {
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User>;
  save(usuarioDto: UserDTO): Promise<User>;
  update(id: number, usuarioDto: UserDTO): Promise<void>;
  delete(id: number): Promise<void>;
}

