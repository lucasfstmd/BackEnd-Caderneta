import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pacientes')
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  ubs: string;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 50 })
  nome_social: string;

  @Column({ length: 100 })
  n_cartao_sus: string;

  @Column({ length: 50 })
  identidade: string;

  @Column({ length: 50 })
  cpf: string;

  @Column({ length: 250 })
  ft_foto: string;

  @Column({ length: 250 })
  nome_mae: string;

  @CreateDateColumn()
  data_nascimento: Date;

  @Column({ length: 100 })
  sexo: string;

  @Column({ length: 250 })
  nascimento_municipio: string;

  @Column({ length: 250 })
  nascimento_uf: string;

  @Column({ length: 250 })
  nacionalidade: string;

  @Column({ length: 250 })
  nascimento: string;

  @Column({ nullable: false })
  sabe_ler_escrever: boolean;

  @Column({ length: 250 })
  escolaridade: string;

  @Column({ length: 250 })
  raca_cor: string;

  @Column({ length: 250 })
  qual_etnia: string;

  @Column({ length: 250 })
  religiao: string;

  @Column({ length: 250 })
  religiao_qual: string;

  @Column({ length: 250 })
  ocupacao: string;

  @Column({ length: 250 })
  situacao_conjugal: string;

  @Column({ length: 250 })
  viuvo_desde: string;

  @Column({ length: 250 })
  unidade_basica: string;

  @Column({ length: 250 })
  alergia_maior_gravidade: string;

  @Column({ nullable: false })
  deficiencia: boolean;

  @Column({ length: 250 })
  deficiencia_qual: string;

  @Column({ length: 250 })
  deficiencia_especificar: string;

  @Column({ length: 250 })
  grupo_sanguineo: string;

  @Column({ length: 250 })
  fator_rh: string;

  @Column({ length: 50 })
  possui_internet: string;

  @Column({ length: 250 })
  rua: string;

  @Column({ length: 250 })
  numero: string;

  @Column({ length: 250 })
  complemento: string;

  @Column({ length: 250 })
  bairro: string;

  @Column({ length: 250 })
  ponto_referencia: string;

  @Column({ length: 250 })
  cep: string;

  @Column({ length: 250 })
  municipio: string;

  @Column({ length: 250 })
  uf: string;

  @Column({ length: 250 })
  telefone: string;

  @Column({ length: 250 })
  celular: string;

  @Column({ length: 250 })
  email: string;

  @Column({ length: 250 })
  numero_identificacao: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
