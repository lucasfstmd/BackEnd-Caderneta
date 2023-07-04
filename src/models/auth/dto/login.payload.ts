import { Usuario } from '../../usuarios/entities/usuario.entity';

export class LoginPayload {
  id: number;
  typeUser: string;

  constructor(user: Usuario) {
    this.id = user.id;
    this.typeUser = user.tipo;
  }
}
