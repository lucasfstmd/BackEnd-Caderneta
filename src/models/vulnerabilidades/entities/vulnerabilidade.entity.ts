import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('vulnerabilidades')
export class Vulnerabilidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ nullable: true })
  ano: number;

  @Column({ length: 250, nullable: true })
  idade: string;

  @Column({ length: 250, nullable: true })
  autopercepcao: string;

  @Column({ length: 250, nullable: true })
  limitacao1: string;

  @Column({ length: 250, nullable: true })
  limitacao2: string;

  @Column({ length: 250, nullable: true })
  limitacao3: string;

  @Column({ length: 250, nullable: true })
  limitacao4: string;

  @Column({ length: 250, nullable: true })
  limitacao5: string;

  @Column({ length: 250, nullable: true })
  limitacao6: string;

  @Column({ type: 'tinyint', nullable: true })
  incapacidades1: number;

  @Column({ type: 'tinyint', nullable: true })
  incapacidades2: number;

  @Column({ type: 'tinyint', nullable: true })
  incapacidades3: number;

  @Column({ type: 'tinyint', nullable: true })
  incapacidades4: number;

  @Column({ type: 'tinyint', nullable: true })
  incapacidades5: number;

  @Column({ nullable: true })
  pontuacao_total: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}