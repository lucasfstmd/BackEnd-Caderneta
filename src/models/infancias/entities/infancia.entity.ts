import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('infancias')
export class Infancia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ nullable: true })
  a1: string;

  @Column({ nullable: true })
  a2_a: string;

  @Column({ nullable: true })
  a2_b: string;

  @Column({ nullable: true })
  a3_a: string;

  @Column({ nullable: true })
  a3_b: string;

  @Column({ nullable: true })
  a4: string;

  @Column({ nullable: true })
  a5_a: string;

  @Column({ nullable: true })
  a5_b: string;

  @Column({ nullable: true })
  a5_c: string;

  @Column({ nullable: true })
  a5_d: string;

  @Column({ nullable: true })
  a5_e: string;

  @Column({ nullable: true })
  a5_f: string;

  @Column({ nullable: true })
  a5_g: string;

  @Column({ nullable: true })
  a5_h: string;

  @Column({ nullable: true })
  a6: string;

  @Column({ nullable: true })
  a7: string;

  @Column({ nullable: true })
  b1: string;

  @Column({ nullable: true })
  b2: string;

  @Column({ nullable: true })
  b3_a: string;

  @Column({ nullable: true })
  b3_b: string;

  @Column({ nullable: true })
  b4: string;

  @Column({ nullable: true })
  b5: string;

  @Column({ nullable: true })
  b6: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
