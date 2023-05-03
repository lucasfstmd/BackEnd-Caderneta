import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateLaboratorialExameDto {
  @ApiProperty()
  @IsNumber()
  paciente_id: number;

  @ApiProperty()
  @IsString()
  hemograma: string;

  @ApiProperty()
  @IsString()
  plaquetas: string;

  @ApiProperty()
  @IsString()
  contagem: string;

  @ApiProperty()
  @IsString()
  mpv: string;

  @ApiProperty()
  @IsString()
  observacoes_morfologicas: string;

  @ApiProperty()
  @IsString()
  vsh: string;

  @ApiProperty()
  @IsString()
  classifi_sanguinea: string;

  @ApiProperty()
  @IsString()
  ic: string;

  @ApiProperty()
  @IsString()
  ts: string;

  @ApiProperty()
  @IsString()
  glicemia_de_jejum: string;

  @ApiProperty()
  @IsString()
  hb_glicosilada: string;

  @ApiProperty()
  @IsString()
  ureia: string;

  @ApiProperty()
  @IsString()
  creatina: string;

  @ApiProperty()
  @IsString()
  sodio: string;

  @ApiProperty()
  @IsString()
  potassio: string;

  @ApiProperty()
  @IsString()
  colesterol_total: string;

  @ApiProperty()
  @IsString()
  hdl: string;

  @ApiProperty()
  @IsString()
  ldl: string;

  @ApiProperty()
  @IsString()
  triglicerides: string;

  @ApiProperty()
  @IsString()
  hiv: string;

  @ApiProperty()
  @IsString()
  tgo: string;

  @ApiProperty()
  @IsString()
  tgp: string;

  @ApiProperty()
  @IsString()
  bt_e_fracoes: string;

  @ApiProperty()
  @IsString()
  acido_urico: string;

  @ApiProperty()
  @IsString()
  psa: string;

  @ApiProperty()
  @IsString()
  t3: string;

  @ApiProperty()
  @IsString()
  t4: string;

  @ApiProperty()
  @IsString()
  tsh: string;

  @ApiProperty()
  @IsString()
  aslo: string;

  @ApiProperty()
  @IsString()
  latex: string;

  @ApiProperty()
  @IsString()
  pcr: string;

  @ApiProperty()
  @IsString()
  mucoproteina: string;

  @ApiProperty()
  @IsString()
  celula_le: string;

  @ApiProperty()
  @IsString()
  vdrl: string;

  @ApiProperty()
  @IsString()
  eas: string;

  @ApiProperty()
  @IsString()
  epf: string;

  @ApiProperty()
  @IsString()
  determinacao_do_fator_reumatoide: string;

  @ApiProperty()
  @IsString()
  eritrograma_eritrocitos: string;

  @ApiProperty()
  @IsString()
  eritrograma_hemoglobina: string;

  @ApiProperty()
  @IsString()
  eritrograma_hematocrito: string;

  @ApiProperty()
  @IsString()
  eritrograma_vcm: string;

  @ApiProperty()
  @IsString()
  eritrograma_hcm: string;

  @ApiProperty()
  @IsString()
  eritrograma_chcm: string;

  @ApiProperty()
  @IsString()
  eritrograma_rdw: string;

  @ApiProperty()
  @IsString()
  eritrograma_rdw_fl: string;

  @ApiProperty()
  @IsString()
  leucograma_leucocitos: string;

  @ApiProperty()
  @IsString()
  leucograma_promielocitos: string;

  @ApiProperty()
  @IsString()
  leucograma_mielocitos: string;

  @ApiProperty()
  @IsString()
  leucograma_metamielocitos: string;

  @ApiProperty()
  @IsString()
  leucograma_neutrofilos_em_bastao: string;

  @ApiProperty()
  @IsString()
  leucograma_neutrofilos_segmentados: string;

  @ApiProperty()
  @IsString()
  leucograma_eosinofilos: string;

  @ApiProperty()
  @IsString()
  leucograma_basofilos: string;

  @ApiProperty()
  @IsString()
  leucograma_linfocitos: string;

  @ApiProperty()
  @IsString()
  leucograma_monocitos: string;
}
