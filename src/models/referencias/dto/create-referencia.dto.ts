import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateReferenciaDto {
  @ApiProperty()
  @IsNumber()
  pacienteId: number;

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
  @IsBoolean()
  mora_com_voce: boolean;

  @ApiProperty()
  @IsString()
  data_informacao: Date;
}
