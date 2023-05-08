import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateQuedaDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsBoolean()
  queda: boolean;

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
  @IsBoolean()
  fratura: boolean;

  @ApiProperty()
  @IsString()
  fratura_qual: string;

  @ApiProperty()
  @IsBoolean()
  parou_atividade: boolean;
}
