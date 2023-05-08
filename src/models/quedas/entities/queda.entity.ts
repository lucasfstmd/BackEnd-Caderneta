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
  queda: boolean;

  @Column({ nullable: true })
  data_mes: number;

  @Column({ nullable: true })
  data_ano: number;

  @Column({ nullable: true })
  local_queda: string;

  @Column({ type: 'tinyint', nullable: true })
  fratura: boolean;

  @Column({ nullable: true })
  fratura_qual: string;

  @Column({ type: 'tinyint', nullable: true })
  parou_atividade: boolean;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
