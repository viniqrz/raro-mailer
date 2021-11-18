import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ActionTemplate } from "./ActionTemplateEntity";
import { History } from "./HistoryEntity";

@Entity()
export class Scheme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  name: string;

  @OneToMany(() => ActionTemplate, (actionTemplate) => actionTemplate.scheme)
  actionTemplates: ActionTemplate[];

  @OneToOne(() => History, (history) => history.scheme)
  history: History;
}
