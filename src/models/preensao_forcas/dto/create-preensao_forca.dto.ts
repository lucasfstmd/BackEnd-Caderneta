import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePreensaoForcaDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  medida_1: number;

  @ApiProperty()
  @IsNumber()
  medida_2: number;

  @ApiProperty()
  @IsNumber()
  medida_3: number;

  @ApiProperty()
  @IsString()
  membro_dominante: string;
}
