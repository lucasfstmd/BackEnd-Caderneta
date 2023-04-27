import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100 })
  usuario: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  senha: string;
}

