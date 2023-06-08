import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Requirement } from './requirements.entity';

@Entity()
export class Items {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    item_name: string;

    @Column()
    item_specification: string;

    @Column({ default: true })
    item_make: string;

    @Column({ default: true })
    item_unit: string;

    @OneToOne((type) => Requirement, (requirement) => requirement.item)
    requirement: Requirement;
}
