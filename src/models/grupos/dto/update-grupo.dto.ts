import { PartialType } from '@nestjs/swagger';
import { CreateGrupoDto } from './create-grupo.dto';
import { IsString } from 'class-validator';

export class UpdateGrupoDto extends PartialType(CreateGrupoDto) {
  @IsString()
  denominacao: string;
}
