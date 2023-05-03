import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('glicemia_controles')
export class GlicemiaControle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ type: 'date', nullable: true })
  data: Date;

  @Column({ length: 250, nullable: false })
  tipo: string;

  @Column({ type: 'float' })
  valor: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}