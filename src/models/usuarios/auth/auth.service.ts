import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../entities/usuario.entity';
import * as bcrypt from 'bcrypt';
import { UsuarioPayload } from './models/UsuarioPayload';
import { UsuarioToken } from './models/UsuarioToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usuariosService: UsuariosService,
  ) {}

  async login(usuario: Usuario): Promise<UsuarioToken> {
    const payload: UsuarioPayload = {
      sub: usuario.id,
      usuario: usuario.usuario,
      email: usuario.email,
    };

    return {
      acces_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(usuario: string, senha: string) {
    const user = await this.usuariosService.findByUsuario(usuario);

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
