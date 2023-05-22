import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('pacientes')
export class Paciente {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100, nullable: true })
  ubs: string;

  @Column({ length: 500, nullable: true })
  nome: string;

  @Column({ length: 500, nullable: true })
  nome_social: string;

  @Column({ length: 100, nullable: true })
  n_cartao_sus: string;

  @Column({ length: 50, nullable: true })
  identidade: string;

  @Column({ length: 50, nullable: true })
  cpf: string;

  @Column({ length: 250, nullable: true })
  nome_mae: string;

  @Column({ length: 100, nullable: true })
  sexo: string;

  @Column({ length: 250, nullable: true })
  nascimento_municipio: string;

  @Column({ length: 250, nullable: true })
  nascimento_uf: string;

  @Column({ length: 250, nullable: true })
  nacionalidade: string;

  @Column({ length: 250, nullable: true })
  nascimento: string;

  @Column({ type: 'tinyint', default: 0 })
  sabe_ler_escrever: number;

  @Column({ length: 250, nullable: true })
  escolaridade: string;

  @Column({ length: 250, nullable: true })
  raca_cor: string;

  @Column({ length: 250, nullable: true })
  religiao: string;

  @Column({ length: 250, nullable: true })
  religiao_qual: string;

  @Column({ length: 250, nullable: true })
  ocupacao: string;

  @Column({ length: 250, nullable: true })
  situacao_conjugal: string;

  @Column({ length: 250, nullable: true })
  viuvo_desde: string;

  @Column({ length: 250, nullable: true })
  unidade_basica: string;

  @Column({ length: 250, nullable: true })
  alergia_maior_gravidade: string;

  @Column({ type: 'tinyint', default: 0 })
  deficiencia: number;

  @Column({ length: 250, nullable: true })
  deficiencia_qual: string;

  @Column({ length: 250, nullable: true })
  deficiencia_especificar: string;

  @Column({ length: 250, nullable: true })
  grupo_sanguineo: string;

  @Column({ length: 250, nullable: true })
  fator_rh: string;

  @Column({ length: 250, nullable: true })
  rua: string;

  @Column({ length: 250, nullable: true })
  numero: string;

  @Column({ length: 250, nullable: true })
  complemento: string;

  @Column({ length: 250, nullable: true })
  bairro: string;

  @Column({ length: 250, nullable: true })
  ponto_referencia: string;

  @Column({ length: 250, nullable: true })
  cep: string;

  @Column({ length: 250, nullable: true })
  municipio: string;

  @Column({ length: 250, nullable: true })
  uf: string;

  @Column({ length: 250, nullable: true })
  telefone: string;

  @Column({ length: 250, nullable: true })
  celular: string;

  @Column({ length: 250, nullable: true })
  email: string;

  @Column({ length: 250, nullable: true })
  qual_etinia: string;

  @Column({ type: 'date', nullable: true })
  data_nascimento: Date;

  @Column({ type: 'tinyint', default: 0, nullable: true })
  possui_internet: number;

  @Column({ length: 100, nullable: true })
  numero_identificacao: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
