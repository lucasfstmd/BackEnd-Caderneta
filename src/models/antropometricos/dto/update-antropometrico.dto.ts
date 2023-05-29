import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAntropometricoDto } from './create-antropometrico.dto';
import { IsNumber } from 'class-validator';

export class UpdateAntropometricoDto extends PartialType(
  CreateAntropometricoDto,
) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  ano: number;

  @ApiProperty()
  @IsNumber()
  peso: number;

  @ApiProperty()
  @IsNumber()
  altura: number;

  @ApiProperty()
  @IsNumber()
  imc: number;

  @ApiProperty()
  @IsNumber()
  perimetro_panturrilha: number;
}
