import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";

import { Email } from "./EmailEntity";
import { Scheme } from "./SchemeEntity";

@Entity()
export class ActionTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @OneToOne(() => Email, (email) => email.action)
  @JoinColumn()
  email: Email;

  @OneToOne(() => Scheme, (scheme) => scheme.actionTemplates)
  scheme: Scheme;
}
