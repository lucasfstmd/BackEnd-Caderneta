import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('familiares')
export class Familiar {
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

  @Column({ type: 'tinyint', nullable: true })
  p6: number;

  @Column({ type: 'tinyint', nullable: true })
  p7: number;

  @Column({ type: 'tinyint', nullable: true })
  p8: number;

  @Column({ type: 'tinyint', nullable: true })
  p9: number;

  @Column({ type: 'tinyint', nullable: true })
  p10: number;

  @Column({ type: 'tinyint', nullable: true })
  p11: number;

  @Column({ type: 'tinyint', nullable: true })
  p12: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
