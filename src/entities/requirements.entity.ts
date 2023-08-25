import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Items } from './items.entity';
import { Site } from './site.entity';

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
  site_id: string;

  @ManyToOne(() => Items, {
    eager: true,
  })
  @JoinColumn()
  item_id: string;

  @Column()
  requirement_quantity: number;

  @Column()
  requirement_delivery_date: Date;
}
