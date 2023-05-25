import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateObitoDto } from './create-obito.dto';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateObitoDto extends PartialType(CreateObitoDto) {
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
