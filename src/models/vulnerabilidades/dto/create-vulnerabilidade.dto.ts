import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

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
  @IsBoolean()
  incapacidades1: boolean;

  @ApiProperty()
  @IsBoolean()
  incapacidades2: boolean;

  @ApiProperty()
  @IsBoolean()
  incapacidades3: boolean;

  @ApiProperty()
  @IsBoolean()
  incapacidades4: boolean;

  @ApiProperty()
  @IsBoolean()
  incapacidades5: boolean;

  @ApiProperty()
  @IsNumber()
  pontuacao_total: number;
}
