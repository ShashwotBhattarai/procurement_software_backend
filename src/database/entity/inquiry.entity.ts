
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable, ManyToOne } from 'typeorm';
import { Items } from './items.entity';
import { Site } from './site.entity';
import { Requirement } from './requirements.entity';
import { Supplier } from './supplier.entity';

@Entity()
export class Inquiry {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    inquiry_date: Date;

    @ManyToOne(() => Requirement, {
    })
    @JoinColumn()
    requirement: string;

    @ManyToOne(() => Supplier, {
    })
    @JoinColumn()
    supplier: string;

}
