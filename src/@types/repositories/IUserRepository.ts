import { User } from "../../models/UserEntity";

export interface IUserRepository {
  save(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User>;
  remove(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
