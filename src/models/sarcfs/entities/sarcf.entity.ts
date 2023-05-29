import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sarcfs')
export class Sarcf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ length: 100 })
  p1: string;

  @Column({ length: 100 })
  p2: string;

  @Column({ length: 100 })
  p3: string;

  @Column({ length: 100 })
  p4: string;

  @Column({ length: 100 })
  p5: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
