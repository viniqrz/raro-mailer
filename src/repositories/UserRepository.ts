import { User } from "../models/UserEntity";
import { EntityRepository, Repository } from "typeorm";
import { IUserRepository } from "../@types/repositories/IUserRepository";



@EntityRepository(User)
export class UserRepository extends Repository<User> implements IUserRepository{
  public async findAll(): Promise<User[]> {
    return await this.find();
  }
 public async findById(id: number): Promise<User> {
   return await this.findOne(id);
  }

  public async findByName(firstName: string, lastName:string):Promise<User[]> {
    let resultUsers = await this.find({select: ["firstName","lastName"]});

    const result = resultUsers.filter((result)=>{
      return result.firstName === firstName && result.lastName === lastName;
     });

   return result ;
  }
}
