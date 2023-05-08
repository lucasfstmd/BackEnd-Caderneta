import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVacinaDto } from './create-vacina.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateVacinaDto extends PartialType(CreateVacinaDto) {
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
