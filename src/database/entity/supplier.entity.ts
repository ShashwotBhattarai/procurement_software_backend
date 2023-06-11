
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Inquiry } from './inquiry.entity';


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

    @OneToMany((type) => Inquiry, (inquiry) => inquiry.supplier)
    inquiry: Inquiry;

}
