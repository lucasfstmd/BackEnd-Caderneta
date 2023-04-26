import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Grupo } from '../../grupos/entities/grupo.entity';

@Entity('usuarios')
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  senha: string;

  @Column({ length: 250 })
  ft_foto: string;

  @ManyToOne(() => Grupo)
  grupo: Grupo;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
