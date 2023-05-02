import { Column } from 'typeorm';
import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDiagnosticoDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  tipo: string;

  @ApiProperty()
  @IsString()
  tipo_outro: string;

  @ApiProperty()
  @IsNumber()
  ano_diagnostico: number;

  @ApiProperty()
  @IsNumber()
  ano_internacao: number;

  @ApiProperty()
  @IsString()
  tempo_internacao: string;
}
