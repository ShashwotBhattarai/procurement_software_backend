import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Requirement } from './requirements.entity';

@Entity()
export class Site {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  site_name: string;

  @Column()
  site_location: string;

  @Column({ default: true })
  site_manager_name: string;

  @OneToMany(() => Requirement, (requirement) => requirement.site_id)
  requirement: Requirement;
}
