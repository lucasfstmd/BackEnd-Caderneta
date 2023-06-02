import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('agendas')
export class Agenda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paciente_id: number;

  @Column({ type: 'date', nullable: true })
  data: Date;

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
