import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePreensaoForcaDto } from './create-preensao_forca.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdatePreensaoForcaDto extends PartialType(
  CreatePreensaoForcaDto,
) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsNumber()
  medida_1: number;

  @ApiProperty()
  @IsNumber()
  medida_2: number;

  @ApiProperty()
  @IsNumber()
  medida_3: number;

  @ApiProperty()
  @IsString()
  membro_dominante: string;
}
