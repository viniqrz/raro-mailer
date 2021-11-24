import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Actor } from "./ActorEntity";
import { Bundle } from "./BundleEntity";

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 80 })
  subject: string;

  @Column({ length: 1200 })
  body: string;

  @Column()
  date: Date;

  @ManyToOne(() => Actor, (actor) => actor.actions)
  actor: Actor;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(() => Bundle, (bundle) => bundle.actions)
  bundle: Bundle;
}
