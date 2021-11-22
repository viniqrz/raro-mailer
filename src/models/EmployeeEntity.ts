import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Action } from "./ActionEntity";
import { Actor } from "./ActorEntity";
import { Address } from "./AddressEntity";
import { History } from "./HistoryEntity";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 25 })
  firstName: string;

  @Column({ nullable: false, length: 25 })
  lastName: string;

  @Column({ length: 50 })
  position: string;

  @Column({ length: 20, unique: true })
  phoneNumber: string;

  @Column({ length: 80, unique: true })
  email: string;

  @Column({ length: 50 })
  project: string;

  @Column({ length: 50 })
  department: string;

  @ManyToOne(() => Actor, (actor) => actor.employees)
  actor: Actor;

  @OneToOne(() => Address, (address) => address.employee)
  address: Address;

  @OneToMany(() => Action, (action) => action.employee)
  actions: Action[];

  @OneToMany(() => History, (history) => history.employee)
  history: History[];
}
