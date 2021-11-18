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

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @OneToOne(() => Email, (email) => email.action)
  @JoinColumn()
  email: Email;

  @ManyToOne(() => Actor, (actor) => actor.actions)
  actor: Actor;

  @ManyToOne(() => Employee, (employee) => employee.actions)
  employee: Employee;
}
