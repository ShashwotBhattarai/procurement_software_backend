import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items {
    @PrimaryGeneratedColumn()
    item_id: number;

    @Column()
    item_name: string;

    @Column()
    item_specification: string;

    @Column({ default: true })
    item_make: string;

    @Column({ default: true })
    item_unit: string;
}
