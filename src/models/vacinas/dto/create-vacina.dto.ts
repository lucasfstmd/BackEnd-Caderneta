import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateVacinaDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsString()
  data: Date;

  @ApiProperty()
  @IsString()
  lote: string;

  @ApiProperty()
  @IsString()
  ass: string;

  @ApiProperty()
  @IsString()
  tipo: string;

  @ApiProperty()
  @IsString()
  outra: string;
}
