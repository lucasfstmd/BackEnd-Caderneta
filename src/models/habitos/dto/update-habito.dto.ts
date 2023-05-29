import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHabitoDto } from './create-habito.dto';
import { IsBoolean, IsNumber } from 'class-validator';

export class UpdateHabitoDto extends PartialType(CreateHabitoDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  ano: number;

  @ApiProperty()
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

  @ApiProperty()
  @IsNumber()
  p5: number;

  @ApiProperty()
  @IsNumber()
  p6: number;

  @ApiProperty()
  @IsNumber()
  p7: number;

  @ApiProperty()
  @IsNumber()
  p8: number;

  @ApiProperty()
  @IsNumber()
  p9: number;

  @ApiProperty()
  @IsNumber()
  p10: number;

  @ApiProperty()
  @IsNumber()
  p11: number;

  @ApiProperty()
  @IsNumber()
  p12: number;

  @ApiProperty()
  @IsNumber()
  p13: number;

  @ApiProperty()
  @IsNumber()
  p14: number;

  @ApiProperty()
  @IsNumber()
  p15: number;

  @ApiProperty()
  @IsNumber()
  p16: number;

  @ApiProperty()
  @IsNumber()
  p17: number;

  @ApiProperty()
  @IsNumber()
  p18: number;

  @ApiProperty()
  @IsNumber()
  p19: number;
}
