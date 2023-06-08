
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable } from 'typeorm';
import { Items } from './items.entity';
import { Site } from './site.entity';

@Entity()
export class Requirement {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    requirement_date: Date;

    @OneToOne(() => Site, {
    })
    @JoinColumn()
    site: string;

    @OneToOne(() => Items, {
    })
    @JoinColumn()
    item: string;

    @Column()
    requirement_quantity: number;

    @Column()
    requirement_delivery_date: Date;

}
