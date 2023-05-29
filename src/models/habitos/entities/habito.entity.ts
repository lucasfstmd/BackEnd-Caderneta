import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('habitos')
export class Habito {
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

  @Column({ type: 'tinyint', nullable: true })
  p13: number;

  @Column({ type: 'tinyint', nullable: true })
  p14: number;

  @Column({ type: 'tinyint', nullable: true })
  p15: number;

  @Column({ type: 'tinyint', nullable: true })
  p16: number;

  @Column({ type: 'tinyint', nullable: true })
  p17: number;

  @Column({ type: 'tinyint', nullable: true })
  p18: number;

  @Column({ type: 'tinyint', nullable: true })
  p19: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
