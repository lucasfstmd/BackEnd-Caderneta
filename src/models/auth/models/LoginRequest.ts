import { IsString } from 'class-validator';

export class LoginRequest {
  @IsString()
  usuario: string;

  @IsString()
  senha: string;
}
