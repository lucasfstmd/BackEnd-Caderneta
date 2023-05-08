import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bioimpedancias')
export class Bioimpedancia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ type: 'float', nullable: true })
  p1: number;

  @Column({ type: 'float', nullable: true })
  p2: number;

  @Column({ type: 'float', nullable: true })
  p3: number;

  @Column({ type: 'float', nullable: true })
  p4: number;

  @Column({ type: 'float', nullable: true })
  p5: number;

  @Column({ type: 'float', nullable: true })
  p6: number;

  @Column({ type: 'float', nullable: true })
  p7: number;

  @Column({ type: 'float', nullable: true })
  p8: number;

  @Column({ type: 'float', nullable: true })
  p9: number;

  @Column({ type: 'float', nullable: true })
  p10: number;

  @Column({ type: 'float', nullable: true })
  p11: number;

  @Column({ type: 'float', nullable: true })
  p12: number;

  @Column({ type: 'float', nullable: true })
  p13: number;

  @Column({ type: 'float', nullable: true })
  p14: number;

  @Column({ type: 'float', nullable: true })
  p15: number;

  @Column({ type: 'float', nullable: true })
  p16: number;

  @Column({ type: 'float', nullable: true })
  p17: number;

  @Column({ type: 'float', nullable: true })
  p18: number;

  @Column({ type: 'float', nullable: true })
  p19: number;

  @Column({ type: 'float', nullable: true })
  p20: number;

  @Column({ type: 'float', nullable: true })
  p21: number;

  @Column({ type: 'float', nullable: true })
  p22: number;

  @Column({ type: 'float', nullable: true })
  p23: number;

  @Column({ type: 'float', nullable: true })
  p24: number;

  @Column({ type: 'float', nullable: true })
  p25: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
