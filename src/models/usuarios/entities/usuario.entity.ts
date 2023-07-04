import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserTypes } from '../enum/user-types.enum';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  usuario: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  senha: string;

  @Column({ nullable: false })
  tipo: UserTypes;
}
