import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateQuedaDto } from './create-queda.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateQuedaDto extends PartialType(CreateQuedaDto) {
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
