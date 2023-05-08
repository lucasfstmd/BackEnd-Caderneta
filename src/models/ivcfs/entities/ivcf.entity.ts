import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('ivcfs')
export class Ivcf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ nullable: true })
  p1: number;

  @Column({ nullable: true })
  p2: number;

  @Column({ nullable: true })
  p3: number;

  @Column({ nullable: true })
  p4: number;

  @Column({ nullable: true })
  p5: number;

  @Column({ nullable: true })
  p6: number;

  @Column({ nullable: true })
  p7: number;

  @Column({ nullable: true })
  p8: number;

  @Column({ nullable: true })
  p9: number;

  @Column({ nullable: true })
  p10: number;

  @Column({ nullable: true })
  p11: number;

  @Column({ nullable: true })
  p12: number;

  @Column({ nullable: true })
  p13: number;

  @Column({ nullable: true })
  p14: number;

  @Column({ type: 'tinyint', nullable: true })
  p14_1: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p14_2: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p14_3: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p14_4: boolean;

  @Column({ nullable: true })
  p15: number;

  @Column({ nullable: true })
  p16: number;

  @Column({ nullable: true })
  p17: number;

  @Column({ nullable: true })
  p18: number;

  @Column({ nullable: true })
  p19: number;

  @Column({ nullable: true })
  p20: number;

  @Column({ type: 'tinyint', nullable: true })
  p20_1: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p20_2: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p20_3: boolean;

  @Column({ nullable: true })
  p21: number;

  @Column({ nullable: true })
  p22: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
