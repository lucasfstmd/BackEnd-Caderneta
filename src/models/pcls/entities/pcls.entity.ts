import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pcls')
export class Pcls {
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

  @Column({ nullable: true })
  p21: number;

  @Column({ nullable: true })
  p22: number;

  @Column({ nullable: true })
  p23: number;

  @Column({ nullable: true })
  p24: number;

  @Column({ nullable: true })
  p25: number;

  @Column({ nullable: true })
  p26: number;

  @Column({ nullable: true })
  p27: number;

  @Column({ nullable: true })
  p28: number;

  @Column({ nullable: true })
  p29: number;

  @Column({ nullable: true })
  p30: number;

  @Column({ nullable: true })
  p31: number;

  @Column({ nullable: true })
  p32: number;

  @Column({ nullable: true })
  p33: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
