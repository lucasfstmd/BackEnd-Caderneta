import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('vacinas')
export class Vacina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ length: 250, nullable: true })
  nome: string;

  @Column({ type: 'date', nullable: true })
  data: Date;

  @Column({ length: 250, nullable: true })
  lote: string;

  @Column({ length: 250, nullable: true })
  ass: string;

  @Column({ length: 250, nullable: true })
  tipo: string;

  @Column({ length: 250, nullable: true })
  outra: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
