import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]+$/, {
    message:
      'Username must only contain uppercase letters, lowercase letters, and numbers.',
  })
  usuario: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  senha: string;
}
