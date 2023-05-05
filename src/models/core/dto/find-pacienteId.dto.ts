import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class FindPacienteIdDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;
}
