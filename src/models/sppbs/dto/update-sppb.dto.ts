import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSppbDto } from './create-sppb.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateSppbDto extends PartialType(CreateSppbDto) {
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

  @ApiProperty()
  @IsString()
  p6: string;

  @ApiProperty()
  @IsString()
  p7: string;

  @ApiProperty()
  @IsString()
  p8: string;

  @ApiProperty()
  @IsString()
  p9: string;

  @ApiProperty()
  @IsString()
  p10: string;

  @ApiProperty()
  @IsString()
  p11: string;

  @ApiProperty()
  @IsString()
  p12: string;

  @ApiProperty()
  @IsString()
  p13: string;

  @ApiProperty()
  @IsString()
  p14: string;
}
