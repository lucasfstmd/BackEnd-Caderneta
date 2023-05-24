import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('referencias')
export class Referencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ length: 500 })
  nome: string;

  @Column({ type: 'date', nullable: true })
  data_nascimento: Date;

  @Column({ length: 500 })
  vinculo: string;

  @Column({ length: 500 })
  endereco: string;

  @Column({ length: 50 })
  telefone: string;

  @Column({ length: 50 })
  celular: string;

  @Column({ type: 'tinyint', nullable: true })
  mora_com_voce: number;

  @Column({ type: 'date', nullable: true })
  data_informacao: Date;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
