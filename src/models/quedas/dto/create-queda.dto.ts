import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateQuedaDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  queda: number;

  @ApiProperty()
  @IsNumber()
  data_mes: number;

  @ApiProperty()
  @IsNumber()
  data_ano: number;

  @ApiProperty()
  @IsString()
  local_queda: string;

  @ApiProperty()
  @IsNumber()
  fratura: number;

  @ApiProperty()
  @IsString()
  fratura_qual: string;

  @ApiProperty()
  @IsNumber()
  parou_atividade: number;
}
