import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('laboratorial_exames')
export class LaboratorialExames {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ nullable: true })
  hemograma: string;

  @Column({ nullable: true })
  plaquetas: string;

  @Column({ nullable: true })
  contagem: string;

  @Column({ nullable: true })
  mpv: string;

  @Column({ nullable: true })
  observacoes_morfologicas: string;

  @Column({ nullable: true })
  vsh: string;

  @Column({ nullable: true })
  classifi_sanguinea: string;

  @Column({ nullable: true })
  ic: string;

  @Column({ nullable: true })
  ts: string;

  @Column({ nullable: true })
  glicemia_de_jejum: string;

  @Column({ nullable: true })
  hb_glicosilada: string;

  @Column({ nullable: true })
  ureia: string;

  @Column({ nullable: true })
  creatina: string;

  @Column({ nullable: true })
  sodio: string;

  @Column({ nullable: true })
  potassio: string;

  @Column({ nullable: true })
  colesterol_total: string;

  @Column({ nullable: true })
  hdl: string;

  @Column({ nullable: true })
  ldl: string;

  @Column({ nullable: true })
  triglicerides: string;

  @Column({ nullable: true })
  hiv: string;

  @Column({ nullable: true })
  tgo: string;

  @Column({ nullable: true })
  tgp: string;

  @Column({ nullable: true })
  bt_e_fracoes: string;

  @Column({ nullable: true })
  acido_urico: string;

  @Column({ nullable: true })
  psa: string;

  @Column({ nullable: true })
  t3: string;

  @Column({ nullable: true })
  t4: string;

  @Column({ nullable: true })
  tsh: string;

  @Column({ nullable: true })
  aslo: string;

  @Column({ nullable: true })
  latex: string;

  @Column({ nullable: true })
  pcr: string;

  @Column({ nullable: true })
  mucoproteina: string;

  @Column({ nullable: true })
  celula_le: string;

  @Column({ nullable: true })
  vdrl: string;

  @Column({ nullable: true })
  eas: string;

  @Column({ nullable: true })
  epf: string;

  @Column({ nullable: true })
  determinacao_do_fator_reumatoide: string;

  @Column({ nullable: true })
  eritrograma_eritrocitos: string;

  @Column({ nullable: true })
  eritrograma_hemoglobina: string;

  @Column({ nullable: true })
  eritrograma_hematocrito: string;

  @Column({ nullable: true })
  eritrograma_vcm: string;

  @Column({ nullable: true })
  eritrograma_hcm: string;

  @Column({ nullable: true })
  eritrograma_chcm: string;

  @Column({ nullable: true })
  eritrograma_rdw: string;

  @Column({ nullable: true })
  eritrograma_rdw_fl: string;

  @Column({ nullable: true })
  leucograma_leucocitos: string;

  @Column({ nullable: true })
  leucograma_promielocitos: string;

  @Column({ nullable: true })
  leucograma_mielocitos: string;

  @Column({ nullable: true })
  leucograma_metamielocitos: string;

  @Column({ nullable: true })
  leucograma_neutrofilos_em_bastao: string;

  @Column({ nullable: true })
  leucograma_neutrofilos_segmentados: string;

  @Column({ nullable: true })
  leucograma_eosinofilos: string;

  @Column({ nullable: true })
  leucograma_basofilos: string;

  @Column({ nullable: true })
  leucograma_linfocitos: string;

  @Column({ nullable: true })
  leucograma_monocitos: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
