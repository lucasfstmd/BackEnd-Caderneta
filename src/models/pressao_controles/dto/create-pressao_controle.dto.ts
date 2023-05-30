import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreatePressaoControleDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  data: string;

  @ApiProperty()
  @IsString()
  pressao: string;
}
