import { IsBoolean, IsDate, IsString } from 'class-validator';

export class CreatePacienteDto {
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
  ft_foto: string;

  @IsString()
  nome_mae: string;

  @IsDate()
  data_nascimento: Date;

  @IsString()
  sexo: string;

  @IsString()
  nascimento_municipio: string;

  @IsString()
  nascimento_uf: string;

  @IsString()
  nacionalidade: string;

  @IsString()
  naccimento: string;

  @IsBoolean()
  sabe_ler_escrever: boolean;

  @IsString()
  escolaridade: string;

  @IsString()
  raca_cor: string;

  @IsString()
  qual_etnia: string;

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
  alergia_maior_qual: string;

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
  possui_internet: string;

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
  numero_identificacao: string;

  @IsDate()
  created: Date;

  @IsDate()
  updated: Date;
}
