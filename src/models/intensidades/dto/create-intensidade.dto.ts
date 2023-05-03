import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateIntensidadeDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsDate()
  data: Date;

  @ApiProperty()
  @IsString()
  local_dor: string;

  @ApiProperty()
  @IsNumber()
  intensidade: number;
}
