import { SetMetadata } from '@nestjs/common';
import { UserTypes } from '../models/usuarios/enum/user-types.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserTypes[]) => SetMetadata(ROLES_KEY, roles);
