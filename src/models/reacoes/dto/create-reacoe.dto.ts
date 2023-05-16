import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateReacoeDto {
  @ApiProperty()
  @IsNumber()
  pacienteId: number;

  @ApiProperty()
  @IsString()
  medicamento: string;

  @ApiProperty()
  @IsNumber()
  data: number;

  @ApiProperty()
  @IsString()
  reacoesAdversasOuAlergicas: string;
}