import { IsString } from 'class-validator';

export class FindUsuarioDto {
  @IsString()
  usuario: string;
}
