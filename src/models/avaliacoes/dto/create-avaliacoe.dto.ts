import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAvaliacoeDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  nome_medicamento: string;

  @ApiProperty()
  @IsString()
  dose: string;

  @ApiProperty()
  @IsString()
  data_inicio: string;

  @ApiProperty()
  @IsString()
  prescrito_por: string;

  @ApiProperty()
  @IsString()
  suspensao_data: string;

  @ApiProperty()
  @IsString()
  suspensao_motivo: string;
}
