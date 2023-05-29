import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { FindUsuarioDto } from '../usuarios/dto/find-usuario.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async login(nomeUsuario: string, senha: string) {
    const findUsuarioDto: FindUsuarioDto = {
      usuario: nomeUsuario,
    };
    const user = await this.usuariosService.findByUsuario(findUsuarioDto);

    if (user) {
      const senhaValida = await bcrypt.compare(senha, user.senha);

      if (senhaValida) {
        const payload = {
          sub: user.id,
          usuario: user.usuario,
        };

        return {
          access_token: await this.jwtService.signAsync(payload),
        }
      }
    }

    throw new UnauthorizedException('Email or Password provided is incorrect');
  }
}
