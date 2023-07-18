import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateFragilidadeDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  p1: number;

  @ApiProperty()
  @IsString()
  p2_1: string;

  @ApiProperty()
  @IsNumber()
  p2_2: number;

  @ApiProperty()
  @IsString()
  p3_1: string;

  @ApiProperty()
  @IsString()
  p3_2: string;

  @ApiProperty()
  @IsNumber()
  p3_3: number;

  @ApiProperty()
  @IsString()
  p4_1: string;

  @ApiProperty()
  @IsNumber()
  p4_2: number;

  @ApiProperty()
  @IsString()
  p5_1a_1: string;

  @ApiProperty()
  @IsNumber()
  p5_1a_2: number;

  @ApiProperty()
  @IsString()
  p5_1b_1: string;

  @ApiProperty()
  @IsString()
  p5_1b_2: string;

  @ApiProperty()
  @IsString()
  p5_2a_1: string;

  @ApiProperty()
  @IsNumber()
  p5_2a_2: number;

  @ApiProperty()
  @IsString()
  p5_2b_1: string;

  @ApiProperty()
  @IsString()
  p5_2b_2: string;

  @ApiProperty()
  @IsString()
  p5_3a_1: string;

  @ApiProperty()
  @IsNumber()
  p5_3a_2: number;

  @ApiProperty()
  @IsString()
  p5_3b_1: string;

  @ApiProperty()
  @IsString()
  p5_3b_2: string;

  @ApiProperty()
  @IsString()
  p5_4a_1: string;

  @ApiProperty()
  @IsString()
  p5_4a_2: string;

  @ApiProperty()
  @IsString()
  p5_4b_1: string;

  @ApiProperty()
  @IsString()
  p5_4b_2: string;

  @ApiProperty()
  @IsString()
  ipaq: string;

  @ApiProperty()
  @IsNumber()
  baixo_nivel_atividade_fisica: number;

  @ApiProperty()
  @IsString()
  classificacao_da_fragilidade: string;
}
