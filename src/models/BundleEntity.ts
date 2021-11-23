import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Employee } from "./EmployeeEntity";
import { Action } from "./ActionEntity";

@Entity()
export class Bundle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.bundle)
  employee: Employee;

  @ManyToMany(() => Action, (action) => action.bundles)
  @JoinTable()
  actions: Action[];
}
