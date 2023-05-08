import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('complementares')
export class Complementar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ nullable: true })
  ano: number;

  @Column({ type: 'tinyint', nullable: true })
  p1: number;

  @Column({ type: 'tinyint', nullable: true })
  p2: number;

  @Column({ type: 'tinyint', nullable: true })
  p3: number;

  @Column({ type: 'tinyint', nullable: true })
  p4: number;

  @Column({ type: 'tinyint', nullable: true })
  p5: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
