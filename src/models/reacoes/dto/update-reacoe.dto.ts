import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReacoeDto } from './create-reacoe.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateReacoeDto extends PartialType(CreateReacoeDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  medicamento: string;

  @ApiProperty()
  @IsNumber()
  data: number;

  @ApiProperty()
  @IsString()
  reacoesAdversasOuAlergicas: string;
}
