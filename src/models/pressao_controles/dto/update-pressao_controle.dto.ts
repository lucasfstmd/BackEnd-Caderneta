import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePressaoControleDto } from './create-pressao_controle.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdatePressaoControleDto extends PartialType(
  CreatePressaoControleDto,
) {
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
