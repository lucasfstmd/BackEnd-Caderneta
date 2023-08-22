import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('fragilidades')
export class Fragilidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ type: 'tinyint', nullable: true })
  p1: number;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p2_1: string;

  @Column({ type: 'tinyint', nullable: true })
  p2_2: number;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p3_1: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p3_2: string;

  @Column({ type: 'tinyint', nullable: true })
  p3_3: number;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p4_1: string;

  @Column({ type: 'tinyint', nullable: true })
  p4_2: number;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_1a_1: string;

  @Column({ type: 'tinyint', nullable: true })
  p5_1a_2: number;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_1b_1: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_1b_2: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_2a_1: string;

  @Column({ type: 'tinyint', nullable: true })
  p5_2a_2: number;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_2b_1: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_2b_2: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_3a_1: string;

  @Column({ type: 'tinyint', nullable: true })
  p5_3a_2: number;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_3b_1: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_3b_2: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_4a_1: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_4a_2: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_4b_1: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  p5_4b_2: string;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  ipaq: string;

  @Column({ type: 'tinyint', nullable: true })
  baixo_nivel_atividade_fisica: number;

  @Column({ nullable: true, length: 100, type: 'varchar' })
  classificacao_da_fragilidade: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
