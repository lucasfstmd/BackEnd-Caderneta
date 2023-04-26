import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('grupos')
export class Grupo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  denominacao: string;
}
