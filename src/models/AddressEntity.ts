import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Employee } from "./EmployeeEntity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  street: string;

  @Column({ length: 20 })
  district: string;

  @Column({ length: 30 })
  city: string;

  @Column({ length: 25 })
  state: string;

  @Column({ length: 30 })
  country: string;

  @Column({ length: 15 })
  cep: string;

  @OneToOne(() => Employee, (employee) => employee.address)
  @JoinColumn()
  employee: Employee;
}
