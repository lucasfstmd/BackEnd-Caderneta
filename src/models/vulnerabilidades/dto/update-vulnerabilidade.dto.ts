import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVulnerabilidadeDto } from './create-vulnerabilidade.dto';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateVulnerabilidadeDto extends PartialType(
  CreateVulnerabilidadeDto,
) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  ano: number;

  @ApiProperty()
  @IsString()
  idade: string;

  @ApiProperty()
  @IsString()
  autopercepcao: string;

  @ApiProperty()
  @IsString()
  limitacao1: string;

  @ApiProperty()
  @IsString()
  limitacao2: string;

  @ApiProperty()
  @IsString()
  limitacao3: string;

  @ApiProperty()
  @IsString()
  limitacao4: string;

  @ApiProperty()
  @IsString()
  limitacao5: string;

  @ApiProperty()
  @IsString()
  limitacao6: string;

  @ApiProperty()
  @IsNumber()
  incapacidades1: number;

  @ApiProperty()
  @IsNumber()
  incapacidades2: number;

  @ApiProperty()
  @IsNumber()
  incapacidades3: number;

  @ApiProperty()
  @IsNumber()
  incapacidades4: number;

  @ApiProperty()
  @IsNumber()
  incapacidades5: number;

  @ApiProperty()
  @IsNumber()
  pontuacao_total: number;
}
