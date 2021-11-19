import { UserAndToken, UserDTO, UserWithoutPassword } from "../dto/UserDto";
import { User } from "../../models/UserEntity";

export interface IUserService {
  getAll(): Promise<User[]>;
  getById(id: number): Promise<UserWithoutPassword>;
  signup(userDto: UserDTO): Promise<UserWithoutPassword>;
  authenticate(email: string, password: string): Promise<UserAndToken>;
  update(id: number, usuarioDto: UserDTO): Promise<void>;
  delete(id: number): Promise<void>;
}
