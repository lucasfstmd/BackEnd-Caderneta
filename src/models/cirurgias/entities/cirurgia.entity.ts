import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cirurgias')
export class Cirurgia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ length: 500, nullable: true })
  cirurgia: string;

  @Column({ nullable: true })
  ano: number;

  @Column({ type: 'text', nullable: true })
  observacao: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
