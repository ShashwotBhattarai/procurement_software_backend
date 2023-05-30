
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Site {
    @PrimaryGeneratedColumn()
    site_id: number;

    @Column()
    site_name: string;

    @Column()
    site_location: string;

    @Column({ default: true })
    site_manager_name: string;
}
