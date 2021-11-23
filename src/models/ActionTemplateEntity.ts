import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

import { Scheme } from "./SchemeEntity";

@Entity()
export class ActionTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 80 })
  subject: string;

  @Column({ length: 1200 })
  body: string;

  @ManyToMany(() => Scheme, (scheme) => scheme.actionTemplates)
  schemes: Scheme;
}
