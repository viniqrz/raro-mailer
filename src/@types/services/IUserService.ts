import { UserDTO } from "../dto/UserDto";
import { User } from "../../models/UserEntity";

export interface IUserService {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User>;
  save(usuarioDto: UserDTO): Promise<User>;
  update(id: number, usuarioDto: UserDTO): Promise<void>;
  delete(id: number): Promise<void>;
}

