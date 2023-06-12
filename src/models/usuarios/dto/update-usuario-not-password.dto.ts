import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUsuarioNotPasswordDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]+$/, {
    message:
      'O nome de usuário deve conter apenas letras maiúsculas, letras minúsculas e números.',
  })
  usuario: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}
