import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePesoDto } from './create-peso.dto';
import { IsNumber } from 'class-validator';

export class UpdatePesoDto extends PartialType(CreatePesoDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  ano: number;

  @ApiProperty()
  @IsNumber()
  peso: number;
}
