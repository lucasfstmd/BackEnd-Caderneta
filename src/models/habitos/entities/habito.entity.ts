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
  p1: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p2: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p3: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p4: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p5: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p6: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p7: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p8: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p9: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p10: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p11: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p12: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p13: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p14: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p15: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p16: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p17: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p18: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p19: boolean;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
