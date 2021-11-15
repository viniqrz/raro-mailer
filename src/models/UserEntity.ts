import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 25 })
  firstName: string;

  @Column({ nullable: false, length: 25 })
  lastName: string;

  @Column({ nullable: false })
  age: number;

  @Column({ nullable: false, length: 50 })
  cargo: string;

  @Column({ nullable: false, length: 20 })
  phoneNumber: string;

  @Column({ nullable: false, length: 80 })
  email: string;
}
