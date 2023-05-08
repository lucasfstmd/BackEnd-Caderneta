import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSarcfDto } from './create-sarcf.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateSarcfDto extends PartialType(CreateSarcfDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  p1: string;

  @ApiProperty()
  @IsString()
  p2: string;

  @ApiProperty()
  @IsString()
  p3: string;

  @ApiProperty()
  @IsString()
  p4: string;

  @ApiProperty()
  @IsString()
  p5: string;
}
