import { Request } from 'express';
import { Usuario } from '../../entities/usuario.entity';

export interface AuthRequest extends Request {
  usuario: Usuario;
}
