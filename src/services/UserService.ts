import { Inject, Service } from "typedi";

import {
  UserDTO,
  UpdateUserDTO,
  UserWithoutPassword,
  UserAndToken,
} from "../@types/dto/UserDto";

import { IUserService } from "../@types/services/IUserService";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { User } from "../models/UserEntity";
import { createHash } from "../helpers/createHash";
import { compareHash } from "../helpers/compareHash";
import { generateToken } from "../helpers/generateToken";

@Service("UserService")
export class UserService implements IUserService {
  private JWT_EXPIRATION_TIME = "6h";

  constructor(
    @Inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async signup(userDto: UserDTO): Promise<UserWithoutPassword> {
    const { email, password } = userDto;

    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if (userAlreadyExists) throw new Error("User already exists");

    const hashedPassword = await createHash(password);

    const user = await this.userFactory({
      ...userDto,
      password: hashedPassword,
    });

    const savedUser = await this.create(user);
    const userWithoutPassword = this.omitPassword(savedUser);

    return userWithoutPassword;
  }

  public async authenticate(
    email: string,
    password: string
  ): Promise<UserAndToken> {
    try {
      const user = await this.userRepository.findByEmail(email);
      if (!user) throw new Error("User or password incorrect");

      const match = await compareHash(password, user.password);
      if (!match) throw new Error("User or password incorrect");

      const token = generateToken(user, this.JWT_EXPIRATION_TIME);
      const userWithoutPassword = this.omitPassword(user);

      return { user: userWithoutPassword, token };
    } catch (err) {
      throw new Error(`Couldn't authenticate user: ${err.message}.`);
    }
  }

  public async getAll(): Promise<UserWithoutPassword[]> {
    return (await this.userRepository.findAll()).map((u) =>
      this.omitPassword(u)
    );
  }

  public async getById(id: number): Promise<UserWithoutPassword> {
    return this.omitPassword(await this.userRepository.findById(id));
  }

  public async update(
    id: number,
    userDto: UpdateUserDTO
  ): Promise<UserWithoutPassword> {
    return this.omitPassword(
      await this.userRepository.save({ ...userDto, id } as User)
    );
  }

  public async delete(id: number) {
    const userToRemove = await this.userRepository.findById(id);

    if (!userToRemove) {
      throw new Error("User not found!");
    }

    await this.userRepository.remove(userToRemove);
  }

  private async create(userDto: User) {
    return this.userRepository.save(userDto);
  }

  private omitPassword(user: User): UserWithoutPassword {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  private async userFactory(userDto: UserDTO): Promise<User> {
    const user = new User();

    Object.keys(userDto).forEach((key) => (user[key] = userDto[key]));

    return user;
  }
}
