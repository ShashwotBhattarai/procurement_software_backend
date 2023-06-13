import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { Items } from './items.entity';
import { Site } from './site.entity';
import { Inquiry } from './inquiry.entity';

@Entity()
export class Requirement {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    requirement_date: Date;

    @ManyToOne(() => Site, {
        eager: true,
    })
    @JoinColumn()
    site: string;

    @ManyToOne(() => Items, {
        eager: true,
    })
    @JoinColumn()
    item: string;

    @Column()
    requirement_quantity: number;

    @Column()
    requirement_delivery_date: Date;

    @OneToMany((type) => Inquiry, (inquiry) => inquiry.supplier)
    inquiry: Inquiry;

}
