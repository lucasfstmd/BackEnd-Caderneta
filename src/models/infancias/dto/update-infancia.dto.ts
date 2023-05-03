import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateInfanciaDto } from './create-infancia.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateInfanciaDto extends PartialType(CreateInfanciaDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  a1: string;

  @ApiProperty()
  @IsString()
  a2_a: string;

  @ApiProperty()
  @IsString()
  a2_b: string;

  @ApiProperty()
  @IsString()
  a3_a: string;

  @ApiProperty()
  @IsString()
  a3_b: string;

  @ApiProperty()
  @IsString()
  a4: string;

  @ApiProperty()
  @IsString()
  a5_a: string;

  @ApiProperty()
  @IsString()
  a5_b: string;

  @ApiProperty()
  @IsString()
  a5_c: string;

  @ApiProperty()
  @IsString()
  a5_d: string;

  @ApiProperty()
  @IsString()
  a5_e: string;

  @ApiProperty()
  @IsString()
  a5_f: string;

  @ApiProperty()
  @IsString()
  a5_g: string;

  @ApiProperty()
  @IsString()
  a5_h: string;

  @ApiProperty()
  @IsString()
  a6: string;

  @ApiProperty()
  @IsString()
  a7: string;

  @ApiProperty()
  @IsString()
  b1: string;

  @ApiProperty()
  @IsString()
  b2: string;

  @ApiProperty()
  @IsString()
  b3_a: string;

  @ApiProperty()
  @IsString()
  b3_b: string;

  @ApiProperty()
  @IsString()
  b4: string;

  @ApiProperty()
  @IsString()
  b5: string;

  @ApiProperty()
  @IsString()
  b6: string;
}
