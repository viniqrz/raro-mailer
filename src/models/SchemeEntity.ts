import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { ActionTemplate } from "./ActionTemplateEntity";

@Entity()
export class Scheme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @ManyToMany(() => ActionTemplate, (actionTemplate) => actionTemplate.schemes)
  @JoinTable()
  actionTemplates: ActionTemplate[];
}
