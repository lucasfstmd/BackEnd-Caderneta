import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('avaliacoes')
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ length: 500, nullable: true })
  nome_medicamento: string;

  @Column({ length: 500, nullable: true })
  dose: string;

  @Column({ length: 500, nullable: true })
  data_inicio: string;

  @Column({ length: 500, nullable: true })
  prescrito_por: string;

  @Column({ length: 500, nullable: true })
  suspensao_data: string;

  @Column({ length: 500, nullable: true })
  suspensao_motivo: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}

