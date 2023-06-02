import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAtualizacoeDto } from './create-atualizacoe.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateAtualizacoeDto extends PartialType(CreateAtualizacoeDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  data: string;

  @ApiProperty()
  @IsString()
  responsavel: string;
}
