import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'obitos' })
export class Obito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ type: 'tinyint', nullable: true })
  obito: boolean;

  @Column({ length: 250 })
  quando: string;

  @Column({ length: 500, nullable: true })
  motivo: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
