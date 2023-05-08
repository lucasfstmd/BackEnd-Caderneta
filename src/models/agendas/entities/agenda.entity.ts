import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';

@Entity('agendas')
export class Agenda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paciente_id: number;

  @Column({ length: 50 })
  data: string;

  @Column({ length: 500 })
  hora: string;

  @Column({ length: 500 })
  local: string;

  @Column({ length: 500 })
  tipo: string;

  @Column({ length: 500 })
  profissional: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
