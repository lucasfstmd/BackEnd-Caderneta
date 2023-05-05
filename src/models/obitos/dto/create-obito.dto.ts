import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateObitoDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsBoolean()
  obito: boolean;

  @ApiProperty()
  @IsString()
  quando: string;

  @ApiProperty()
  @IsString()
  motivo: string;
}
