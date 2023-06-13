import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateObitoDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  obito: number;

  @ApiProperty()
  @IsString()
  quando: string;

  @ApiProperty()
  @IsString()
  motivo: string;
}
