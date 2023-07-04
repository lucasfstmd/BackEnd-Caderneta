import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UserTypes } from '../models/usuarios/enum/user-types.enum';
import { JwtService } from '@nestjs/jwt';
import { LoginPayload } from '../models/auth/dto/login.payload';
import { JwtConstants } from '../models/auth/auth.constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserTypes[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }

    const { authorization } = context.switchToHttp().getRequest().headers;

    const loginPayload: LoginPayload | undefined = await this.jwtService
      .verifyAsync(authorization, {
        secret: JwtConstants.secret,
      })
      .catch(() => undefined);

    if (!loginPayload) return false;

    return requiredRoles.some((role) => role === loginPayload.typeUser);
  }
}
