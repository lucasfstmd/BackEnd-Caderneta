import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('quedas')
export class Queda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ type: 'tinyint', nullable: true })
  queda: number;

  @Column({ nullable: true })
  data_mes: number;

  @Column({ nullable: true })
  data_ano: number;

  @Column({ length: 250, nullable: true })
  local_queda: string;

  @Column({ type: 'tinyint', nullable: true })
  fratura: number;

  @Column({ length: 250, nullable: true })
  fratura_qual: string;

  @Column({ type: 'tinyint', nullable: true })
  parou_atividade: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
