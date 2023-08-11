import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Credentials {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;
}
