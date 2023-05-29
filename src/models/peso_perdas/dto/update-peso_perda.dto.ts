import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePesoPerdaDto } from './create-peso_perda.dto';
import { IsNumber } from 'class-validator';

export class UpdatePesoPerdaDto extends PartialType(CreatePesoPerdaDto) {
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
