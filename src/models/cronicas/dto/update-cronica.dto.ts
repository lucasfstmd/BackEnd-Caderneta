import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCronicaDto } from './create-cronica.dto';
import { IsNumber } from 'class-validator';

export class UpdateCronicaDto extends PartialType(CreateCronicaDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  ano: number;

  @ApiProperty()
  @IsNumber()
  p1: number;

  @ApiProperty()
  @IsNumber()
  p2: number;

  @ApiProperty()
  @IsNumber()
  p3: number;

  @ApiProperty()
  @IsNumber()
  p4: number;
}
