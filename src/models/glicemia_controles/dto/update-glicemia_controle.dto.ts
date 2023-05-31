import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGlicemiaControleDto } from './create-glicemia_controle.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateGlicemiaControleDto extends PartialType(
  CreateGlicemiaControleDto,
) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  data: string;

  @ApiProperty()
  @IsString()
  tipo: string;

  @ApiProperty()
  @IsNumber()
  valor: number;
}
