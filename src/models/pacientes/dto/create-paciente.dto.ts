import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePacienteDto {
  @ApiProperty()
  @IsString()
  ubs: string;

  @ApiProperty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsString()
  nome_social: string;

  @ApiProperty()
  @IsString()
  n_cartao_sus: string;

  @ApiProperty()
  @IsString()
  identidade: string;

  @ApiProperty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsString()
  nome_mae: string;

  @ApiProperty()
  @IsString()
  sexo: string;

  @ApiProperty()
  @IsString()
  nascimento_municipio: string;

  @ApiProperty()
  @IsString()
  nascimento_uf: string;

  @ApiProperty()
  @IsString()
  nacionalidade: string;

  @ApiProperty()
  @IsString()
  nascimento: string;

  @ApiProperty()
  @IsNumber()
  sabe_ler_escrever: number;

  @ApiProperty()
  @IsString()
  escolaridade: string;

  @ApiProperty()
  @IsString()
  raca_cor: string;

  @ApiProperty()
  @IsString()
  religiao: string;

  @ApiProperty()
  @IsString()
  religiao_qual: string;

  @ApiProperty()
  @IsString()
  ocupacao: string;

  @ApiProperty()
  @IsString()
  situacao_conjugal: string;

  @ApiProperty()
  @IsString()
  viuvo_desde: string;

  @ApiProperty()
  @IsString()
  unidade_basica: string;

  @ApiProperty()
  @IsString()
  alergia_maior_gravidade: string;

  @ApiProperty()
  @IsNumber()
  deficiencia: number;

  @ApiProperty()
  @IsString()
  deficiencia_qual: string;

  @ApiProperty()
  @IsString()
  deficiencia_especificar: string;

  @ApiProperty()
  @IsString()
  grupo_sanguineo: string;

  @ApiProperty()
  @IsString()
  rua: string;

  @ApiProperty()
  @IsString()
  numero: string;

  @ApiProperty()
  @IsString()
  complemento: string;

  @ApiProperty()
  @IsString()
  bairro: string;

  @ApiProperty()
  @IsString()
  ponto_referencia: string;

  @ApiProperty()
  @IsString()
  cep: string;

  @ApiProperty()
  @IsString()
  municipio: string;

  @ApiProperty()
  @IsString()
  uf: string;

  @ApiProperty()
  @IsString()
  telefone: string;

  @ApiProperty()
  @IsString()
  celular: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  data_nascimento: string;

  @ApiProperty()
  @IsString()
  possui_internet: string;

  @ApiProperty()
  @IsString()
  numero_identificacao: string;
}
