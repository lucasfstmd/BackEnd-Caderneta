import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSarcfDto {
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
