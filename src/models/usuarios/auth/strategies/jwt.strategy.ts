import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { ExtractJwt } from 'passport-jwt';
import * as process from 'process';
import { UsuarioPayload } from '../models/UsuarioPayload';
import { UsuarioFromJwt } from '../models/UsuarioFromJwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SERCRET,
    });
  }

  async validate(payload: UsuarioPayload): Promise<UsuarioFromJwt> {
    return {
      id: payload.sub,
      usuario: payload.usuario,
      email: payload.email,
    };
  }
}
