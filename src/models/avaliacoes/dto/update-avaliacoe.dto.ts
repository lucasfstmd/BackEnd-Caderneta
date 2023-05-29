import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAvaliacoeDto } from './create-avaliacoe.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateAvaliacoeDto extends PartialType(CreateAvaliacoeDto) {
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
