import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import {
  IsEmail,
  IsEnum,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserTypes } from '../enum/user-types.enum';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
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

  @ApiProperty()
  @IsString()
  senha: string;

  @ApiProperty()
  @IsEnum(UserTypes)
  tipo: UserTypes;
}
