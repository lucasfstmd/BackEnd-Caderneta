import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUbDto } from './create-ub.dto';
import { IsString } from 'class-validator';

export class UpdateUbDto extends PartialType(CreateUbDto) {
  @ApiProperty()
  @IsString()
  nome: string;
}
