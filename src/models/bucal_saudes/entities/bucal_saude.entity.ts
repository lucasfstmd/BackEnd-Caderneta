import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bucal_saudes')
export class BucalSaude {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ nullable: false })
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

  @Column({ type: 'tinyint', nullable: true })
  p20: number;

  @Column({ type: 'tinyint', nullable: true })
  p21: number;

  @Column({ type: 'tinyint', nullable: true })
  p22: number;

  @Column({ type: 'tinyint', nullable: true })
  p23: number;

  @Column({ type: 'tinyint', nullable: true })
  p24: number;

  @Column({ type: 'tinyint', nullable: true })
  p25: number;

  @Column({ type: 'tinyint', nullable: true })
  p26: number;

  @Column({ type: 'tinyint', nullable: true })
  p27: number;

  @Column({ type: 'tinyint', nullable: true })
  p28: number;

  @Column({ type: 'tinyint', nullable: true })
  p29: number;

  @Column({ type: 'tinyint', nullable: true })
  p30: number;

  @Column({ type: 'tinyint', nullable: true })
  p31: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  p32: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
