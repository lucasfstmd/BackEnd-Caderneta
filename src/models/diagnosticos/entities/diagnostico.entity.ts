import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';

@Entity('diagnosticos')
export class Diagnostico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ nullable: true, length: 100 })
  tipo: string;

  @Column({ nullable: true, length: 250 })
  tipo_outro: string;

  @Column({ nullable: true })
  ano_diagnostico: number;

  @Column({ nullable: true })
  ano_internacao: number;

  @Column({ nullable: true, length: 250 })
  tempo_internacao: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}