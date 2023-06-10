
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class Supplier {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    supplier_name: string;

    @Column()
    supplier_location: string;

    @Column()
    supplier_phone_number: string;

}
