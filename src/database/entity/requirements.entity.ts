
import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Items } from './items.entity';
import { Site } from './site.entity';

@Entity()
export class Requirement {
    @PrimaryGeneratedColumn()
    requirement_id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    requirement_date: Date;

    @Column()
    requirement_quantity: number;

    @Column()
    requirement_delivery_date: Date;

    @OneToOne(() => Items)
    @JoinColumn()
    items_id: Items;

    @OneToOne(() => Site)
    @JoinColumn()
    site_id: Site;
}
