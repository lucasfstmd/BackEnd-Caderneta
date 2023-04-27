export interface UsuarioPayload {
  sub: number;
  usuario: string;
  email: string;
  iat?: number;
  exp?: number;
}
