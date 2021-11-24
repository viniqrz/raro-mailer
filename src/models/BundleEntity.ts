import { Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Employee } from "./EmployeeEntity";
import { Action } from "./ActionEntity";

@Entity()
export class Bundle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.bundle)
  employee: Employee;

  @OneToMany(() => Action, (action) => action.bundle)
  actions: Action[];
}
