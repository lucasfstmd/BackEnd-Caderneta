import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFrrisqueDto } from './create-frrisque.dto';
import { IsBoolean, IsNumber } from 'class-validator';

export class UpdateFrrisqueDto extends PartialType(CreateFrrisqueDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsBoolean()
  p1: boolean;

  @ApiProperty()
  @IsBoolean()
  p2: boolean;

  @ApiProperty()
  @IsBoolean()
  p3: boolean;

  @ApiProperty()
  @IsBoolean()
  p4: boolean;

  @ApiProperty()
  @IsBoolean()
  p5: boolean;

  @ApiProperty()
  @IsBoolean()
  p6: boolean;

  @ApiProperty()
  @IsBoolean()
  p7: boolean;

  @ApiProperty()
  @IsBoolean()
  p8: boolean;

  @ApiProperty()
  @IsBoolean()
  p9: boolean;

  @ApiProperty()
  @IsBoolean()
  p10: boolean;
}
