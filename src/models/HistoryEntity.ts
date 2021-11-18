import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Scheme } from "./SchemeEntity";
import { User } from "./UserEntity";
import { Actor } from "./ActorEntity";
import { Employee } from "./EmployeeEntity";

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Scheme, (scheme) => scheme.history)
  @JoinColumn()
  scheme: Scheme;

  @ManyToOne(() => Actor, (actor) => actor.history)
  actor: Actor;

  @ManyToOne(() => Employee, (employee) => employee.history)
  employee: Employee;

  @ManyToOne(() => User, (user) => user.history)
  createdBy: User;
}
