import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateIntensidadeDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  data: string;

  @ApiProperty()
  @IsString()
  local_dor: string;

  @ApiProperty()
  @IsNumber()
  intensidade: number;
}
