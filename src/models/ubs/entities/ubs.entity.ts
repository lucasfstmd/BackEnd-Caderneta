import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ubs')
export class Ubs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  nome: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
