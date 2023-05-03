import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('intensidades')
export class Intensidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ type: 'date', nullable: true })
  data: Date;

  @Column({ length: 500, nullable: true })
  local_dor: string;

  @Column({ nullable: true })
  intensidade: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
