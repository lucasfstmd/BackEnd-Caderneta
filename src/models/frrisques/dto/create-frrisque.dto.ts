import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateFrrisqueDto {
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
}
