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

  @Column({ type: 'tinyint', nullable: true })
  p20: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p21: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p22: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p23: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p24: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p25: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p26: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p27: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p28: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p29: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p30: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p31: boolean;

  @Column({ type: 'varchar', length: 500, nullable: true })
  p32: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
