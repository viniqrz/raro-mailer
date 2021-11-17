import { UserDTO } from "../dto/UserDto";
import { User } from "../../models/UserEntity";


export interface IUserRepository{

  save(user:User):Promise<User>;
  remove(user:User);
  findAll():Promise<User[]>;
  findById(id:number):Promise<User>;
  findByName(firstName:string, lastName:string);

}
