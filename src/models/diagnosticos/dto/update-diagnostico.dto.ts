import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDiagnosticoDto } from './create-diagnostico.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateDiagnosticoDto extends PartialType(CreateDiagnosticoDto) {
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
