import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBioimpedanciaDto } from './create-bioimpedancia.dto';
import { IsNumber } from 'class-validator';

export class UpdateBioimpedanciaDto extends PartialType(
  CreateBioimpedanciaDto,
) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

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

  @ApiProperty()
  @IsNumber()
  p20: number;

  @ApiProperty()
  @IsNumber()
  p21: number;

  @ApiProperty()
  @IsNumber()
  p22: number;

  @ApiProperty()
  @IsNumber()
  p23: number;

  @ApiProperty()
  @IsNumber()
  p24: number;

  @ApiProperty()
  @IsNumber()
  p25: number;
}
