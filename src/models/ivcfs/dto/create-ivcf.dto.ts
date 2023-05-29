import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

export class CreateIvcfDto {
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
  @IsBoolean()
  p14_1: boolean;

  @ApiProperty()
  @IsNumber()
  p14_2: boolean;

  @ApiProperty()
  @IsBoolean()
  p14_3: boolean;

  @ApiProperty()
  @IsBoolean()
  p14_4: boolean;

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
  @IsBoolean()
  p20_1: boolean;

  @ApiProperty()
  @IsBoolean()
  p20_2: boolean;

  @ApiProperty()
  @IsBoolean()
  p20_3: boolean;

  @ApiProperty()
  @IsNumber()
  p21: number;

  @ApiProperty()
  @IsNumber()
  p22: number;
}
