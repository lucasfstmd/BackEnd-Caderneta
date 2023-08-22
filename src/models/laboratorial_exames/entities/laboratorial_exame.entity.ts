import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('laboratorial_exames')
export class LaboratorialExames {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ length: 100, nullable: true })
  hemograma: string;

  @Column({ length: 100, nullable: true })
  plaquetas: string;

  @Column({ length: 100, nullable: true })
  contagem: string;

  @Column({ length: 100, nullable: true })
  mpv: string;

  @Column({ length: 100, nullable: true })
  observacoes_morfologicas: string;

  @Column({ length: 100, nullable: true })
  vsh: string;

  @Column({ length: 100, nullable: true })
  classifi_sanguinea: string;

  @Column({ length: 100, nullable: true })
  ic: string;

  @Column({ length: 100, nullable: true })
  ts: string;

  @Column({ length: 100, nullable: true })
  glicemia_de_jejum: string;

  @Column({ length: 100, nullable: true })
  hb_glicosilada: string;

  @Column({ length: 100, nullable: true })
  ureia: string;

  @Column({ length: 100, nullable: true })
  creatina: string;

  @Column({ length: 100, nullable: true })
  sodio: string;

  @Column({ length: 100, nullable: true })
  potassio: string;

  @Column({ length: 100, nullable: true })
  colesterol_total: string;

  @Column({ length: 100, nullable: true })
  hdl: string;

  @Column({ length: 100, nullable: true })
  ldl: string;

  @Column({ length: 100, nullable: true })
  triglicerides: string;

  @Column({ length: 100, nullable: true })
  hiv: string;

  @Column({ length: 100, nullable: true })
  tgo: string;

  @Column({ length: 100, nullable: true })
  tgp: string;

  @Column({ length: 100, nullable: true })
  bt_e_fracoes: string;

  @Column({ length: 100, nullable: true })
  acido_urico: string;

  @Column({ length: 100, nullable: true })
  psa: string;

  @Column({ length: 100, nullable: true })
  t3: string;

  @Column({ length: 100, nullable: true })
  t4: string;

  @Column({ length: 100, nullable: true })
  tsh: string;

  @Column({ length: 100, nullable: true })
  aslo: string;

  @Column({ length: 100, nullable: true })
  latex: string;

  @Column({ length: 100, nullable: true })
  pcr: string;

  @Column({ length: 100, nullable: true })
  mucoproteina: string;

  @Column({ length: 100, nullable: true })
  celula_le: string;

  @Column({ length: 100, nullable: true })
  vdrl: string;

  @Column({ length: 100, nullable: true })
  eas: string;

  @Column({ length: 100, nullable: true })
  epf: string;

  @Column({ length: 100, nullable: true })
  determinacao_do_fator_reumatoide: string;

  @Column({ length: 100, nullable: true })
  eritrograma_eritrocitos: string;

  @Column({ length: 100, nullable: true })
  eritrograma_hemoglobina: string;

  @Column({ length: 100, nullable: true })
  eritrograma_hematocrito: string;

  @Column({ length: 100, nullable: true })
  eritrograma_vcm: string;

  @Column({ length: 100, nullable: true })
  eritrograma_hcm: string;

  @Column({ length: 100, nullable: true })
  eritrograma_chcm: string;

  @Column({ length: 100, nullable: true })
  eritrograma_rdw: string;

  @Column({ length: 100, nullable: true })
  eritrograma_rdw_fl: string;

  @Column({ length: 100, nullable: true })
  leucograma_leucocitos: string;

  @Column({ length: 100, nullable: true })
  leucograma_promielocitos: string;

  @Column({ length: 100, nullable: true })
  leucograma_mielocitos: string;

  @Column({ length: 100, nullable: true })
  leucograma_metamielocitos: string;

  @Column({ length: 100, nullable: true })
  leucograma_neutrofilos_em_bastao: string;

  @Column({ length: 100, nullable: true })
  leucograma_neutrofilos_segmentados: string;

  @Column({ length: 100, nullable: true })
  leucograma_eosinofilos: string;

  @Column({ length: 100, nullable: true })
  leucograma_basofilos: string;

  @Column({ length: 100, nullable: true })
  leucograma_linfocitos: string;

  @Column({ length: 100, nullable: true })
  leucograma_monocitos: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
