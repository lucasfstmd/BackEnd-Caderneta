import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePolifarmaciaDto } from './create-polifarmacia.dto';
import { IsBoolean, IsNumber } from 'class-validator';

export class UpdatePolifarmaciaDto extends PartialType(CreatePolifarmaciaDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  uso_concomitante: number;
}
