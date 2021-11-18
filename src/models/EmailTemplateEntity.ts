import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmailTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  subject: string;

  @Column({ length: 1200 })
  body: string;
}
