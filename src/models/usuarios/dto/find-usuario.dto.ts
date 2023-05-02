import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindUsuarioDto {
  @ApiProperty()
  @IsString()
  usuario: string;
}
