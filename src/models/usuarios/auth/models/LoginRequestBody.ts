import { IsString } from 'class-validator';

export class LoginRequestBody {
  @IsString()
  usuario: string;

  @IsString()
  password: string;
}
