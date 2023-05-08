import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('reacoes')
export class Reacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ length: 250 })
  medicamento: string;

  @Column({ nullable: true })
  data: number;

  @Column({ length: 250 })
  reacoes_adversas_ou_alergicas: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
