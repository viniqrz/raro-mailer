import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Actor } from "./ActorEntity";
import { Email } from "./EmailEntity";
import { Employee } from "./EmployeeEntity";
import { User } from "./UserEntity";

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  description: string;

  @Column()
  actionDate: Date;

  @OneToOne(() => Email, (email) => email.action)
  @JoinColumn()
  email: Email;

  @ManyToOne(() => Actor, (actor) => actor.actions)
  actor: Actor;

  @ManyToOne(() => Employee, (employee) => employee.actions)
  employee: Employee;

  @ManyToOne(() => User, (user) => user.actions)
  user: User;
}
