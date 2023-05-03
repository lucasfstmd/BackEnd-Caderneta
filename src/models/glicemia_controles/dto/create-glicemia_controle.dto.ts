import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateGlicemiaControleDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsDate()
  data: Date;

  @ApiProperty()
  @IsString()
  tipo: string;

  @ApiProperty()
  @IsNumber()
  valor: number;
}
