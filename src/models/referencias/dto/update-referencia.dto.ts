import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReferenciaDto } from './create-referencia.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateReferenciaDto extends PartialType(CreateReferenciaDto) {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsString()
  data_nascimento: Date;

  @ApiProperty()
  @IsString()
  vinculo: string;

  @ApiProperty()
  @IsString()
  endereco: string;

  @ApiProperty()
  @IsString()
  telefone: string;

  @ApiProperty()
  @IsString()
  celular: string;

  @ApiProperty()
  @IsNumber()
  mora_com_voce: number;

  @ApiProperty()
  @IsString()
  data_informacao: Date;
}
