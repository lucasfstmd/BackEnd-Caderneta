import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateComplementareDto } from './create-complementare.dto';
import { IsNumber } from 'class-validator';

export class UpdateComplementareDto extends PartialType(
  CreateComplementareDto,
) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  ano: number;

  @ApiProperty()
  @IsNumber()
  p1: number;

  @ApiProperty()
  @IsNumber()
  p2: number;

  @ApiProperty()
  @IsNumber()
  p3: number;

  @ApiProperty()
  @IsNumber()
  p4: number;

  @ApiProperty()
  @IsNumber()
  p5: number;
}
