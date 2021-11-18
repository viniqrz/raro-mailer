import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Action } from "./ActionEntity";
import { Employee } from "./EmployeeEntity";
import { History } from "./HistoryEntity";

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 25 })
  firstName: string;

  @Column({ nullable: false, length: 25 })
  lastName: string;

  @Column({ length: 50 })
  position: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @Column({ length: 80 })
  email: string;

  @Column({ length: 50 })
  project: string;

  @Column({ length: 50 })
  department: string;

  @OneToMany(() => Employee, (employee) => employee.actor)
  employees: Employee[];

  @OneToMany(() => Action, (action) => action.actor)
  actions: Action[];

  @OneToMany(() => History, (history) => history.actor)
  history: History[];
}
