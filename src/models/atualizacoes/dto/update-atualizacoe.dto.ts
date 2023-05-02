import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAtualizacoeDto } from './create-atualizacoe.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateAtualizacoeDto extends PartialType(CreateAtualizacoeDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsDate()
  data: Date;

  @ApiProperty()
  @IsString()
  responsavel: string;
}
