import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateVulnerabilidadeDto {
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
