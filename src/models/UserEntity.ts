import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import { History } from "./HistoryEntity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 25 })
  lastName: string;

  @Column({ length: 50 })
  cargo: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @Column({ length: 80 })
  email: string;

  @OneToMany(() => History, (history) => history.createdBy)
  history: History[];
}
