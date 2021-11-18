import { Inject, Service } from "typedi";
import { UserDTO } from "../@types/dto/UserDto";
import { IUserService } from "../@types/services/IUserService";
import { IUserRepository } from "../@types/repositories/IUserRepository";

@Service('UserService')
export class UserService implements IUserService {
  constructor(@Inject('UserRepository') private userRepository: IUserRepository) { }

  async getAll() {
    return this.userRepository.findAll();
  }

  async getById(id: number) {
    return this.userRepository.findById(id);
  }

  async save(userDto: UserDTO) {
    return this.userRepository.save(userDto);
  }

  async update(id: number, userDto: UserDTO) {
    await this.userRepository.save({ ...userDto, id });
  }

  async delete(id: number) {
    const userToRemove = await this.userRepository.findById(id);
    if (!userToRemove) {
      throw new Error('User not found!');
    }

    await this.userRepository.remove(userToRemove);
  }
}
