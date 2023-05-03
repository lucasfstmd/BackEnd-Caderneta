import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateIntensidadeDto } from './create-intensidade.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateIntensidadeDto extends PartialType(CreateIntensidadeDto) {
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
