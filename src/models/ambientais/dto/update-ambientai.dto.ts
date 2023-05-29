import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAmbientaiDto } from './create-ambientai.dto';
import { IsBoolean, IsNumber } from 'class-validator';

export class UpdateAmbientaiDto extends PartialType(CreateAmbientaiDto) {
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

  @ApiProperty()
  @IsNumber()
  p6: number;

  @ApiProperty()
  @IsNumber()
  p7: number;

  @ApiProperty()
  @IsNumber()
  p8: number;

  @ApiProperty()
  @IsNumber()
  p9: number;

  @ApiProperty()
  @IsNumber()
  p10: number;

  @ApiProperty()
  @IsNumber()
  p11: number;
}
