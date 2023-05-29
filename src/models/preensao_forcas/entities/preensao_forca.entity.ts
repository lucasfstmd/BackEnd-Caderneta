import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('preensao_forcas')
export class PreensaoForca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ nullable: true, type: 'float' })
  medida_1: number;

  @Column({ nullable: true, type: 'float' })
  medida_2: number;

  @Column({ nullable: true, type: 'float' })
  medida_3: number;

  @Column({ length: 100, nullable: true })
  membro_dominante: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
