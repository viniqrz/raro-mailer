import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 25 })
  lastName: string;

  @Column({ length: 50 })
  position: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @Column({ length: 80 })
  email: string;

  @Column({ length: 80 })
  password: string;
}
