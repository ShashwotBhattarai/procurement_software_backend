import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Requirement } from './requirements.entity';
import { Supplier } from './supplier.entity';

@Entity()
export class Inquiry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  inquiry_date: Date;

  @ManyToOne(() => Requirement, {
    eager: true,
  })
  @JoinColumn()
  requirement_id: string;

  @ManyToOne(() => Supplier, {
    eager: true,
  })
  @JoinColumn()
  supplier_id: string;
}
