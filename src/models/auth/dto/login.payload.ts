import { Usuario } from '../../usuarios/entities/usuario.entity';

export class LoginPayload {
  id: number;
  name: string;
  typeUser: string;

  constructor(user: Usuario) {
    this.id = user.id;
    this.name = user.usuario;
    this.typeUser = user.tipo;
  }
}
