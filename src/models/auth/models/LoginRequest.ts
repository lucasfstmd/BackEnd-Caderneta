import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty()
  @IsString()
  usuario: string;

  @ApiProperty()
  @IsString()
  senha: string;
}
