import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAntropometricoDto {
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
  perimetroPanturrilha: number;
}
