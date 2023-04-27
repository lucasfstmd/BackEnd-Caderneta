import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]+$/, {
    message:
      'Username must only contain uppercase letters, lowercase letters, and numbers.',
  })
  usuario: string;

  @IsEmail()
  email: string;

  @IsString()
  senha: string;
}
