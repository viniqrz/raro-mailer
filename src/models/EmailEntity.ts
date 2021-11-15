import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Action } from "./ActionEntity";

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  subject: string;

  @Column({ length: 1200 })
  body: string;

  @Column({ length: 80 })
  address: string;

  @Column()
  sendDate: Date;

  @OneToOne(() => Action, (action) => action.email)
  action: Action;
}
