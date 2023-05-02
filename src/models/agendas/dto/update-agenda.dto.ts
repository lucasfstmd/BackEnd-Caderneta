import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAgendaDto } from './create-agenda.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateAgendaDto extends PartialType(CreateAgendaDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  data: string;

  @ApiProperty()
  @IsString()
  hora: string;

  @ApiProperty()
  @IsString()
  local: string;

  @ApiProperty()
  @IsString()
  tipo: string;

  @ApiProperty()
  @IsString()
  profissional: string;
}
