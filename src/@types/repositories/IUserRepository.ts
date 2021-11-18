import { User } from "../../models/UserEntity";

export interface IUserRepository{
  save(user:User):Promise<User>;
  findAll():Promise<User[]>;
  findById(id:number):Promise<User>;
  remove(user:User):Promise<User>;
  findByName(firstName:string, lastName:string):Promise<User[]>;
}
