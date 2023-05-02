import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBucalSaudeDto } from './create-bucal_saude.dto';
import { IsBoolean, IsNumber } from 'class-validator';

export class UpdateBucalSaudeDto extends PartialType(CreateBucalSaudeDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  ano: number;

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

  @ApiProperty()
  @IsBoolean()
  p11: boolean;

  @ApiProperty()
  @IsBoolean()
  p12: boolean;

  @ApiProperty()
  @IsBoolean()
  p13: boolean;

  @ApiProperty()
  @IsBoolean()
  p14: boolean;

  @ApiProperty()
  @IsBoolean()
  p15: boolean;

  @ApiProperty()
  @IsBoolean()
  p16: boolean;

  @ApiProperty()
  @IsBoolean()
  p17: boolean;

  @ApiProperty()
  @IsBoolean()
  p18: boolean;

  @ApiProperty()
  @IsBoolean()
  p19: boolean;

  @ApiProperty()
  @IsBoolean()
  p20: boolean;

  @ApiProperty()
  @IsBoolean()
  p21: boolean;

  @ApiProperty()
  @IsBoolean()
  p22: boolean;

  @ApiProperty()
  @IsBoolean()
  p23: boolean;

  @ApiProperty()
  @IsBoolean()
  p24: boolean;

  @ApiProperty()
  @IsBoolean()
  p25: boolean;

  @ApiProperty()
  @IsBoolean()
  p26: boolean;

  @ApiProperty()
  @IsBoolean()
  p27: boolean;

  @ApiProperty()
  @IsBoolean()
  p28: boolean;

  @ApiProperty()
  @IsBoolean()
  p29: boolean;

  @ApiProperty()
  @IsBoolean()
  p30: boolean;

  @ApiProperty()
  @IsBoolean()
  p31: boolean;

  @ApiProperty()
  @IsBoolean()
  p32: string;
}
