import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rcredentials {
    @PrimaryGeneratedColumn()
    credentials_id: number;

    @Column()
    fullname: number;

    @Column()
    username: number;

    @Column()
    password: Date;

}
