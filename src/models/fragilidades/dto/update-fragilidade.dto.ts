import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFragilidadeDto } from './create-fragilidade.dto';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateFragilidadeDto extends PartialType(CreateFragilidadeDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsBoolean()
  p1: boolean;

  @ApiProperty()
  @IsString()
  p2_1: string;

  @ApiProperty()
  @IsBoolean()
  p2_2: boolean;

  @ApiProperty()
  @IsString()
  p3_1: string;

  @ApiProperty()
  @IsString()
  p3_2: string;

  @ApiProperty()
  @IsBoolean()
  p3_3: boolean;

  @ApiProperty()
  @IsString()
  p4_1: string;

  @ApiProperty()
  @IsBoolean()
  p4_2: boolean;

  @ApiProperty()
  @IsString()
  p5_1a_1: string;

  @ApiProperty()
  @IsBoolean()
  p5_1a_2: boolean;

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
  @IsBoolean()
  p5_2a_2: boolean;

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
  @IsBoolean()
  p5_3a_2: boolean;

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
  @IsBoolean()
  baixo_nivel_atividade_fisica: boolean;

  @ApiProperty()
  @IsString()
  classificacao_da_fragilidade: string;
}
