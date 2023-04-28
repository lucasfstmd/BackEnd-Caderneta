import { PartialType } from '@nestjs/swagger';
import { CreatePacienteDto } from './create-paciente.dto';
import { IsBoolean, IsDate, IsString } from 'class-validator';

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {
  @IsString()
  ubs: string;

  @IsString()
  nome: string;

  @IsString()
  nome_social: string;

  @IsString()
  n_cartao_sus: string;

  @IsString()
  identidade: string;

  @IsString()
  cpf: string;

  @IsString()
  nome_mae: string;

  @IsString()
  sexo: string;

  @IsString()
  nascimento_municipio: string;

  @IsString()
  nascimento_uf: string;

  @IsString()
  nacionalidade: string;

  @IsString()
  nascimento: string;

  @IsBoolean()
  sabe_ler_escrever: boolean;

  @IsString()
  escolaridade: string;

  @IsString()
  raca_cor: string;

  @IsString()
  religiao: string;

  @IsString()
  religiao_qual: string;

  @IsString()
  ocupacao: string;

  @IsString()
  situacao_conjugal: string;

  @IsString()
  viuvo_desde: string;

  @IsString()
  unidade_basica: string;

  @IsString()
  alergia_maior_gravidade: string;

  @IsBoolean()
  deficiencia: boolean;

  @IsString()
  deficiencia_qual: string;

  @IsString()
  deficiencia_especificar: string;

  @IsString()
  grupo_sanguineo: string;

  @IsString()
  fator_rh: string;

  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  complemento: string;

  @IsString()
  bairro: string;

  @IsString()
  ponto_referencia: string;

  @IsString()
  cep: string;

  @IsString()
  municipio: string;

  @IsString()
  uf: string;

  @IsString()
  telefone: string;

  @IsString()
  celular: string;

  @IsString()
  email: string;

  @IsString()
  qual_etnia: string;

  @IsString()
  data_nascimento: string;

  @IsBoolean()
  possui_internet: boolean;

  @IsString()
  numero_identificacao: string;
}
