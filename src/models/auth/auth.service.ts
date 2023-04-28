import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { FindUsuarioDto } from '../usuarios/dto/find-usuario.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usuariosService: UsuariosService) {}

  async login(nomeUsuario: string, senha: string) {
    const findUsuarioDto: FindUsuarioDto = {
      usuario: nomeUsuario,
    };
    const user = await this.usuariosService.findByUsuario(findUsuarioDto);

    if (user) {
      const senhaValida = await bcrypt.compare(senha, user.senha);

      if (senhaValida) {
        return {
          ...user,
          senha: undefined,
        };
      }
    }

    throw new UnauthorizedException('Email or Password provided is incorrect');
  }
}
