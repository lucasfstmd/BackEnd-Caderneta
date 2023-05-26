import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePesoPerdaDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  ano: number;

  @ApiProperty()
  @IsNumber()
  perda_peso: number;
}
