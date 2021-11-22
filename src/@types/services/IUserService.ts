import { UserAndToken, UserDTO, UserWithoutPassword } from "../dto/UserDto";

export interface IUserService {
  getAll(): Promise<UserWithoutPassword[]>;
  getById(id: number): Promise<UserWithoutPassword>;
  signup(userDto: UserDTO): Promise<UserWithoutPassword>;
  authenticate(email: string, password: string): Promise<UserAndToken>;
  update(id: number, usuarioDto: UserDTO): Promise<UserWithoutPassword>;
  delete(id: number): Promise<void>;
}
