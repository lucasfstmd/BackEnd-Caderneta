import { Column, PrimaryGeneratedColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'banco_de_dados',
  expression: `
        SELECT
          pacientes.id AS paciente_id,
          pacientes.ubs,
          pacientes.nome,
          pacientes.nome_social,
          pacientes.n_cartao_sus,
          pacientes.identidade,
          pacientes.cpf,
          pacientes.nome_mae,
          pacientes.data_nascimento,
          pacientes.sexo,
          pacientes.nascimento_municipio,
          pacientes.nascimento_uf,
          pacientes.nacionalidade,
          pacientes.nascimento,
          pacientes.sabe_ler_escrever,
          pacientes.escolaridade,
          pacientes.raca_cor,
          pacientes.qual_etinia,\t
          pacientes.religiao,
          pacientes.religiao_qual,
          pacientes.ocupacao,
          pacientes.situacao_conjugal,
          pacientes.viuvo_desde,
          pacientes.unidade_basica,
          pacientes.alergia_maior_gravidade,
          pacientes.deficiencia,
          pacientes.deficiencia_qual,
          pacientes.deficiencia_especificar,
          pacientes.grupo_sanguineo,
          pacientes.fator_rh,
          pacientes.possui_internet,
          pacientes.rua,
          pacientes.numero,
          pacientes.complemento,
          pacientes.bairro,
          pacientes.ponto_referencia,
          pacientes.cep,
          pacientes.municipio,
          pacientes.uf,
          pacientes.telefone,
          pacientes.celular,
          pacientes.email,
          pacientes.numero_identificacao,
          pacientes.created,
          pacientes.updated,  
          agendas.id AS agendas_id,
          agendas.data AS agendas_data,
          agendas.hora AS agendas_hora,
          agendas.local AS agendas_local,
          agendas.tipo AS agendas_tipo,
          agendas.profissional AS agendas_profissional,
          agendas.created AS agendas_created,
          agendas.updated AS agendas_updated,
          ambientais.id AS ambientais_id,
          ambientais.paciente_id AS ambientais_paciente_id,
          ambientais.ano AS ambientais_ano,
          ambientais.p1 AS ambientais_p1,
          ambientais.p2 AS ambientais_p2,
          ambientais.p3 AS ambientais_p3,
          ambientais.p4 AS ambientais_p4,
          ambientais.p5 AS ambientais_p5,
          ambientais.p6 AS ambientais_p6,
          ambientais.p7 AS ambientais_p7,
          ambientais.p8 AS ambientais_p8,
          ambientais.p9 AS ambientais_p9,
          ambientais.p10 AS ambientais_p10,
          ambientais.p11 AS ambientais_p11,
          ambientais.created AS ambientais_created,
          ambientais.updated AS ambientais_updated,
          antropometricos.id AS antropometricos_id,
          antropometricos.paciente_id AS antropometricos_paciente_id,
          antropometricos.ano AS antropometricos_ano,
          antropometricos.peso,
          antropometricos.altura,
          antropometricos.imc,
          antropometricos.perimetro_panturrilha,
          antropometricos.created AS antropometricos_created,
          antropometricos.updated AS antropometricos_updated,
          atualizacoes.id AS atualizacoes_id,
          atualizacoes.paciente_id AS atualizacoes_paciente_id,
          atualizacoes.data AS atualizacoes_data,
          atualizacoes.responsavel AS atualizacoes_responsavel,
          atualizacoes.created AS atualizacoes_created,
          atualizacoes.updated AS atualizacoes_updated,
          bioimpedancias.id AS bioimpedancias_id,
          bioimpedancias.paciente_id AS bioimpedancias_paciente_id,
          bioimpedancias.p1 AS bioimpedancias_p1,
          bioimpedancias.p2 AS bioimpedancias_p2,
          bioimpedancias.p3 AS bioimpedancias_p3,
          bioimpedancias.p4 AS bioimpedancias_p4,
          bioimpedancias.p5 AS bioimpedancias_p5,
          bioimpedancias.p6 AS bioimpedancias_p6,
          bioimpedancias.p7 AS bioimpedancias_p7,
          bioimpedancias.p8 AS bioimpedancias_p8,
          bioimpedancias.p9 AS bioimpedancias_p9,
          bioimpedancias.p10 AS bioimpedancias_p10,
          bioimpedancias.p11 AS bioimpedancias_p11,
          bioimpedancias.p12 AS bioimpedancias_p12,
          bioimpedancias.p13 AS bioimpedancias_p13,
          bioimpedancias.p14 AS bioimpedancias_p14,
          bioimpedancias.p15 AS bioimpedancias_p15,
          bioimpedancias.p16 AS bioimpedancias_p16,
          bioimpedancias.p17 AS bioimpedancias_p17,
          bioimpedancias.p18 AS bioimpedancias_p18,
          bioimpedancias.p19 AS bioimpedancias_p19,
          bioimpedancias.p20 AS bioimpedancias_p20,
          bioimpedancias.p21 AS bioimpedancias_p21,
          bioimpedancias.p22 AS bioimpedancias_p22,
          bioimpedancias.p23 AS bioimpedancias_p23,
          bioimpedancias.p24 AS bioimpedancias_p24,
          bioimpedancias.p25 AS bioimpedancias_p25,
          bioimpedancias.created AS bioimpedancias_created,
          bioimpedancias.updated AS bioimpedancias_updated,
          bucal_saudes.id AS bucal_saudes_id,
          bucal_saudes.paciente_id AS bucal_saudes_paciente_id,
          bucal_saudes.ano AS bucal_saudes_ano,
          bucal_saudes.p1 AS bucal_saudes_p1,
          bucal_saudes.p2 AS bucal_saudes_p2,
          bucal_saudes.p3 AS bucal_saudes_p3,
          bucal_saudes.p4 AS bucal_saudes_p4,
          bucal_saudes.p5 AS bucal_saudes_p5,
          bucal_saudes.p6 AS bucal_saudes_p6,
          bucal_saudes.p7 AS bucal_saudes_p7,
          bucal_saudes.p8 AS bucal_saudes_p8,
          bucal_saudes.p9 AS bucal_saudes_p9,
          bucal_saudes.p10 AS bucal_saudes_p10,
          bucal_saudes.p11 AS bucal_saudes_p11,
          bucal_saudes.p12 AS bucal_saudes_p12,
          bucal_saudes.p13 AS bucal_saudes_p13,
          bucal_saudes.p14 AS bucal_saudes_p14,
          bucal_saudes.p15 AS bucal_saudes_p15,
          bucal_saudes.p16 AS bucal_saudes_p16,
          bucal_saudes.p17 AS bucal_saudes_p17,
          bucal_saudes.p18 AS bucal_saudes_p18,
          bucal_saudes.p19 AS bucal_saudes_p19,
          bucal_saudes.p20 AS bucal_saudes_p20,
          bucal_saudes.p21 AS bucal_saudes_p21,
          bucal_saudes.p22 AS bucal_saudes_p22,
          bucal_saudes.p23 AS bucal_saudes_p23,
          bucal_saudes.p24 AS bucal_saudes_p24,
          bucal_saudes.p25 AS bucal_saudes_p25,
          bucal_saudes.p26 AS bucal_saudes_p26,
          bucal_saudes.p27 AS bucal_saudes_p27,
          bucal_saudes.p28 AS bucal_saudes_p28,
          bucal_saudes.p29 AS bucal_saudes_p29,
          bucal_saudes.p30 AS bucal_saudes_p30,
          bucal_saudes.p31 AS bucal_saudes_p31,
          bucal_saudes.p32 AS bucal_saudes_p32,
          bucal_saudes.created AS bucal_saudes_created,
          bucal_saudes.updated AS bucal_saudes_updated,
          cirurgias.id AS cirurgias_id,
          cirurgias.paciente_id AS cirurgias_paciente_id,
          cirurgias.cirurgia AS cirurgias_cirurgia,
          cirurgias.ano AS cirurgias_ano,
          cirurgias.observacao AS cirurgias_observacao,
          cirurgias.created AS cirurgias_created,
          cirurgias.updated AS cirurgias_updated,
          complementares.id AS complementares_id,
          complementares.paciente_id AS complementares_paciente_id,
          complementares.ano AS complementares_ano,
          complementares.p1 AS complementares_p1,
          complementares.p2 AS complementares_p2,
          complementares.p3 AS complementares_p3,
          complementares.p4 AS complementares_p4,
          complementares.p5 AS complementares_p5,
          complementares.created AS complementares_created,
          complementares.updated AS complementares_updated,
          cronicas.id AS cronicas_id,
          cronicas.paciente_id AS cronicas_paciente_id,
          cronicas.ano AS cronicas_ano,
          cronicas.p1 AS cronicas_p1,
          cronicas.p2 AS cronicas_p2,
          cronicas.p3 AS cronicas_p3,
          cronicas.p4 AS cronicas_p4,
          cronicas.created AS cronicas_created,
          cronicas.updated AS cronicas_updated,
          diagnosticos.id AS diagnosticos_id,
          diagnosticos.paciente_id AS diagnosticos_paciente_id,
          diagnosticos.tipo AS diagnosticos_tipo,
          diagnosticos.tipo_outro AS diagnosticos_tipo_outro,
          diagnosticos.ano_diagnostico AS diagnosticos_ano_diagnostico,
          diagnosticos.ano_internacao AS diagnosticos_ano_internacao,
          diagnosticos.tempo_internacao AS diagnosticos_tempo_internacao,
          diagnosticos.created AS diagnosticos_created,
          diagnosticos.updated AS diagnosticos_updated,
          familiares.id AS familiares_id,
          familiares.paciente_id AS familiares_paciente_id,
          familiares.ano AS familiares_ano,
          familiares.p1 AS familiares_p1,
          familiares.p2 AS familiares_p2,
          familiares.p3 AS familiares_p3,
          familiares.p4 AS familiares_p4,
          familiares.p5 AS familiares_p5,
          familiares.p6 AS familiares_p6,
          familiares.p7 AS familiares_p7,
          familiares.p8 AS familiares_p8,
          familiares.p9 AS familiares_p9,
          familiares.p10 AS familiares_p10,
          familiares.p11 AS familiares_p11,
          familiares.p12 AS familiares_p12,
          familiares.created AS familiares_created,
          familiares.updated AS familiares_updated,\t
          fragilidades.id AS fragilidades_id,
          fragilidades.paciente_id AS fragilidades_paciente_id,
          fragilidades.p1 AS fragilidades_p1,
          fragilidades.p2_2 AS fragilidades_p2_2,
          fragilidades.p3_3 AS fragilidades_p3_3,
          fragilidades.p4_2 AS fragilidades_p4_2,
          fragilidades.p5_1a_2 AS fragilidades_p5_1a_2,
          fragilidades.p5_2a_2 AS fragilidades_p5_2a_2,
          fragilidades.p5_3a_2 AS fragilidades_p5_3a_2,
          fragilidades.baixo_nivel_atividade_fisica AS fragilidades_baixo_nivel_atividade_fisica,
          fragilidades.created AS fragilidades_created,
          fragilidades.updated AS fragilidades_updated,
          fragilidades.p2_1 AS fragilidades_p2_1,
          fragilidades.p3_1 AS fragilidades_p3_1,
          fragilidades.p3_2 AS fragilidades_p3_2,
          fragilidades.p4_1 AS fragilidades_p4_1,
          fragilidades.p5_1a_1 AS fragilidades_p5_1a_1,
          fragilidades.p5_1b_1 AS fragilidades_p5_1b_1,
          fragilidades.p5_1b_2 AS fragilidades_p5_1b_2,
          fragilidades.p5_2a_1 AS fragilidades_p5_2a_1,
          fragilidades.p5_2b_1 AS fragilidades_p5_2b_1,
          fragilidades.p5_2b_2 AS fragilidades_p5_2b_2,
          fragilidades.p5_3a_1 AS fragilidades_p5_3a_1,
          fragilidades.p5_3b_1 AS fragilidades_p5_3b_1,
          fragilidades.p5_3b_2 AS fragilidades_p5_3b_2,
          fragilidades.p5_4a_1 AS fragilidades_p5_4a_1,
          fragilidades.p5_4a_2 AS fragilidades_p5_4a_2,
          fragilidades.p5_4b_1 AS fragilidades_p5_4b_1,
          fragilidades.p5_4b_2 AS fragilidades_p5_4b_2,
          fragilidades.ipaq AS fragilidades_ipaq,
          fragilidades.classificacao_da_fragilidade AS fragilidades_classificacao_da_fragilidade,
          frrisques.id AS frrisques_id,
          frrisques.paciente_id AS frrisques_paciente_id,
          frrisques.p1 AS frrisques_p1,
          frrisques.p2 AS frrisques_p2,
          frrisques.p3 AS frrisques_p3,
          frrisques.p4 AS frrisques_p4,
          frrisques.p5 AS frrisques_p5,
          frrisques.p6 AS frrisques_p6,
          frrisques.p7 AS frrisques_p7,
          frrisques.p8 AS frrisques_p8,
          frrisques.p9 AS frrisques_p9,
          frrisques.p10 AS frrisques_p10,
          frrisques.created AS frrisques_created,
          frrisques.updated AS frrisques_updated,
          glicemia_controles.id AS glicemia_controles_id,
          glicemia_controles.paciente_id AS glicemia_controles_paciente_id,
          glicemia_controles.data AS glicemia_controles_data,
          glicemia_controles.tipo AS glicemia_controles_tipo,
          glicemia_controles.valor AS glicemia_controles_valor,
          glicemia_controles.created AS glicemia_controles_created,
          glicemia_controles.updated AS glicemia_controles_updated,
          habitos.id AS habitos_id,
          habitos.paciente_id AS habitos_paciente_id,
          habitos.ano AS habitos_ano,
          habitos.p1 AS habitos_p1,
          habitos.p2 AS habitos_p2,
          habitos.p3 AS habitos_p3,
          habitos.p4 AS habitos_p4,
          habitos.p5 AS habitos_p5,
          habitos.p6 AS habitos_p6,
          habitos.p7 AS habitos_p7,
          habitos.p8 AS habitos_p8,
          habitos.p9 AS habitos_p9,
          habitos.p10 AS habitos_p10,
          habitos.p11 AS habitos_p11,
          habitos.p12 AS habitos_p12,
          habitos.p13 AS habitos_p13,
          habitos.p14 AS habitos_p14,
          habitos.p15 AS habitos_p15,
          habitos.p16 AS habitos_p16,
          habitos.p17 AS habitos_p17,
          habitos.p18 AS habitos_p18,
          habitos.p19 AS habitos_p19,
          habitos.created AS habitos_created,
          habitos.updated AS habitos_updated,
          infancias.id AS infancias_id,
          infancias.paciente_id AS infancias_paciente_id,
          infancias.a1 AS infancias_a1,
          infancias.a2_a AS infancias_a2_a,
          infancias.a2_b AS infancias_a2_b,
          infancias.a3_a AS infancias_a3_a,
          infancias.a3_b AS infancias_a3_b,
          infancias.a4 AS infancias_a4,
          infancias.a5_a AS infancias_a5_a,
          infancias.a5_b AS infancias_a5_b,
          infancias.a5_c AS infancias_a5_c,
          infancias.a5_d AS infancias_a5_d,
          infancias.a5_e AS infancias_a5_e,
          infancias.a5_f AS infancias_a5_f,
          infancias.a5_g AS infancias_a5_g,
          infancias.a5_h AS infancias_a5_h,
          infancias.a6 AS infancias_a6,
          infancias.a7 AS infancias_a7,
          infancias.b1 AS infancias_b1,
          infancias.b2 AS infancias_b2,
          infancias.b3_a AS infancias_b3_a,
          infancias.b3_b AS infancias_b3_b,
          infancias.b4 AS infancias_b4,
          infancias.b5 AS infancias_b5,
          infancias.b6 AS infancias_b6,
          infancias.created AS infancias_created,
          infancias.updated AS infancias_updated,
          intensidades.id AS intensidades_id,
          intensidades.paciente_id AS intensidades_paciente_id,
          intensidades.data AS intensidades_data,
          intensidades.local_dor AS intensidades_local_dor,
          intensidades.intensidade AS intensidades_intensidade,
          intensidades.created AS intensidades_created,
          intensidades.updated AS intensidades_updated,
          ivcfs.id AS ivcfs_id,
          ivcfs.paciente_id AS ivcfs_paciente_id,
          ivcfs.p1 AS ivcfs_p1,
          ivcfs.p2 AS ivcfs_p2,
          ivcfs.p3 AS ivcfs_p3,
          ivcfs.p4 AS ivcfs_p4,
          ivcfs.p5 AS ivcfs_p5,
          ivcfs.p6 AS ivcfs_p6,
          ivcfs.p7 AS ivcfs_p7,
          ivcfs.p8 AS ivcfs_p8,
          ivcfs.p9 AS ivcfs_p9,
          ivcfs.p10 AS ivcfs_p10,
          ivcfs.p11 AS ivcfs_p11,
          ivcfs.p12 AS ivcfs_p12,
          ivcfs.p13 AS ivcfs_p13,
          ivcfs.p14 AS ivcfs_p14,
          ivcfs.p14_1 AS ivcfs_p14_1,
          ivcfs.p14_2 AS ivcfs_p14_2,
          ivcfs.p14_3 AS ivcfs_p14_3,
          ivcfs.p14_4 AS ivcfs_p14_4,
          ivcfs.p15 AS ivcfs_p15,
          ivcfs.p16 AS ivcfs_p16,
          ivcfs.p17 AS ivcfs_p17,
          ivcfs.p18 AS ivcfs_p18,
          ivcfs.p19 AS ivcfs_p19,
          ivcfs.p20 AS ivcfs_p20,
          ivcfs.p20_1 AS ivcfs_p20_1,
          ivcfs.p20_2 AS ivcfs_p20_2,
          ivcfs.p20_3 AS ivcfs_p20_3,
          ivcfs.p21 AS ivcfs_p21,
          ivcfs.p22 AS ivcfs_p22,
          ivcfs.created AS ivcfs_created,
          ivcfs.updated AS ivcfs_updated,
          laboratorial_exames.id AS laboratorial_exames_id,
          laboratorial_exames.paciente_id AS laboratorial_exames_paciente_id,
          laboratorial_exames.hemograma AS laboratorial_exames_hemograma,
          laboratorial_exames.plaquetas AS laboratorial_exames_plaquetas,
          laboratorial_exames.contagem AS laboratorial_exames_contagem,
          laboratorial_exames.mpv AS laboratorial_exames_mpv,
          laboratorial_exames.observacoes_morfologicas AS laboratorial_exames_observacoes_morfologicas,
          laboratorial_exames.vsh AS laboratorial_exames_vsh,
          laboratorial_exames.classifi_sanguinea AS laboratorial_exames_classifi_sanguinea,
          laboratorial_exames.ic AS laboratorial_exames_ic,
          laboratorial_exames.ts AS laboratorial_exames_ts,
          laboratorial_exames.glicemia_de_jejum AS laboratorial_exames_glicemia_de_jejum,
          laboratorial_exames.hb_glicosilada AS laboratorial_exames_hb_glicosilada,
          laboratorial_exames.ureia AS laboratorial_exames_ureia,
          laboratorial_exames.creatina AS laboratorial_exames_creatina,
          laboratorial_exames.sodio AS laboratorial_exames_sodio,
          laboratorial_exames.potassio AS laboratorial_exames_potassio,
          laboratorial_exames.colesterol_total AS laboratorial_exames_colesterol_total,
          laboratorial_exames.hdl AS laboratorial_exames_hdl,
          laboratorial_exames.ldl AS laboratorial_exames_ldl,
          laboratorial_exames.triglicerides AS laboratorial_exames_triglicerides,
          laboratorial_exames.hiv AS laboratorial_exames_hiv,
          laboratorial_exames.tgo AS laboratorial_exames_tgo,
          laboratorial_exames.tgp AS laboratorial_exames_tgp,
          laboratorial_exames.bt_e_fracoes AS laboratorial_exames_bt_e_fracoes,
          laboratorial_exames.acido_urico AS laboratorial_exames_acido_urico,
          laboratorial_exames.psa AS laboratorial_exames_psa,
          laboratorial_exames.t3 AS laboratorial_exames_t3,
          laboratorial_exames.t4 AS laboratorial_exames_t4,
          laboratorial_exames.tsh AS laboratorial_exames_tsh,
          laboratorial_exames.aslo AS laboratorial_exames_aslo,
          laboratorial_exames.latex AS laboratorial_exames_latex,
          laboratorial_exames.pcr AS laboratorial_exames_pcr,
          laboratorial_exames.mucoproteina AS laboratorial_exames_mucoproteina,
          laboratorial_exames.celula_le AS laboratorial_exames_celula_le,
          laboratorial_exames.vdrl AS laboratorial_exames_vdrl,
          laboratorial_exames.eas AS laboratorial_exames_eas,
          laboratorial_exames.epf AS laboratorial_exames_epf,
          laboratorial_exames.determinacao_do_fator_reumatoide AS laboratorial_exames_determinacao_do_fator_reumatoide,
          laboratorial_exames.eritrograma_eritrocitos AS laboratorial_exames_eritrograma_eritrocitos,
          laboratorial_exames.eritrograma_hemoglobina AS laboratorial_exames_eritrograma_hemoglobina,
          laboratorial_exames.eritrograma_hematocrito AS laboratorial_exames_eritrograma_hematocrito,
          laboratorial_exames.eritrograma_vcm AS laboratorial_exames_eritrograma_vcm,
          laboratorial_exames.eritrograma_hcm AS laboratorial_exames_eritrograma_hcm,
          laboratorial_exames.eritrograma_chcm AS laboratorial_exames_eritrograma_chcm,
          laboratorial_exames.eritrograma_rdw AS laboratorial_exames_eritrograma_rdw,
          laboratorial_exames.eritrograma_rdw_fl AS laboratorial_exames_eritrograma_rdw_fl,
          laboratorial_exames.leucograma_leucocitos AS laboratorial_exames_leucograma_leucocitos,
          laboratorial_exames.leucograma_promielocitos AS laboratorial_exames_leucograma_promielocitos,
          laboratorial_exames.leucograma_mielocitos AS laboratorial_exames_leucograma_mielocitos,
          laboratorial_exames.leucograma_metamielocitos AS laboratorial_exames_leucograma_metamielocitos,
          laboratorial_exames.leucograma_neutrofilos_em_bastao AS laboratorial_exames_leucograma_neutrofilos_em_bastao,
          laboratorial_exames.leucograma_eosinofilos AS laboratorial_exames_leucograma_eosinofilos,
          laboratorial_exames.leucograma_basofilos AS laboratorial_exames_leucograma_basofilos,
          laboratorial_exames.leucograma_linfocitos AS laboratorial_exames_leucograma_linfocitos,
          laboratorial_exames.leucograma_monocitos AS laboratorial_exames_leucograma_monocitos,
          laboratorial_exames.created AS laboratorial_exames_created,
          laboratorial_exames.updated AS laboratorial_exames_updated,
          laboratorial_exames.leucograma_neutrofilos_segmentados AS laboratorial_exames_leucograma_neutrofilos_segmentados,
          obitos.id as obitos_id,
          obitos.obito AS obitos_obito,
          obitos.quando AS obitos_quando,
          obitos.motivo AS obitos_motivo,
          obitos.created AS obitos_created,
          obitos.updated AS obitos_updated,
          pcls.id AS pcls_id,
          pcls.p1 AS pcls_p1,
          pcls.p2 AS pcls_p2,
          pcls.p3 AS pcls_p3,
          pcls.p4 AS pcls_p4,
          pcls.p5 AS pcls_p5,
          pcls.p6 AS pcls_p6,
          pcls.p7 AS pcls_p7,
          pcls.p8 AS pcls_p8,
          pcls.p9 AS pcls_p9,
          pcls.p10 AS pcls_p10,
          pcls.p11 AS pcls_p11,
          pcls.p12 AS pcls_p12,
          pcls.p13 AS pcls_p13,
          pcls.p14 AS pcls_p14,
          pcls.p15 AS pcls_p15,
          pcls.p16 AS pcls_p16,
          pcls.p17 AS pcls_p17,
          pcls.p18 AS pcls_p18,
          pcls.p19 AS pcls_p19,
          pcls.p20 AS pcls_p20,
          pcls.p21 AS pcls_p21,
          pcls.p22 AS pcls_p22,
          pcls.p23 AS pcls_p23,
          pcls.p24 AS pcls_p24,
          pcls.p25 AS pcls_p25,
          pcls.p26 AS pcls_p26,
          pcls.p27 AS pcls_p27,
          pcls.p28 AS pcls_p28,
          pcls.p29 AS pcls_p29,
          pcls.p30 AS pcls_p30,
          pcls.p31 AS pcls_p31,
          pcls.p32 AS pcls_p32,
          pcls.p33 AS pcls_p33,
          pcls.created AS pcls_created,
          pcls.updated AS pcls_updated,
          peso_perdas.id as peso_perdas_id,
          peso_perdas.ano AS peso_perdas_ano,
          peso_perdas.perda_peso AS peso_perdas_perda_peso,
          peso_perdas.created AS peso_perdas_created,
          peso_perdas.updated AS peso_perdas_updated,
          pesos.id as pesos_id,
          pesos.ano AS pesos_ano,
          pesos.peso AS pesos_peso,
          pesos.created AS pesos_created,
          pesos.updated AS pesos_updated,
          polifarmacias.id AS polifarmacias_id,
          polifarmacias.uso_concomitante AS polifarmacias_uso_concomitante,
          polifarmacias.created AS polifarmacias_created,
          polifarmacias.updated AS polifarmacias_updated,
          preensao_forcas.id AS preensao_forcas_id,
          preensao_forcas.medida_1 AS preensao_forcas_medida_1,
          preensao_forcas.medida_2 AS preensao_forcas_medida_2,
          preensao_forcas.medida_3 AS preensao_forcas_medida_3,
          preensao_forcas.membro_dominante AS preensao_forcas_membro_dominante,
          preensao_forcas.created AS preensao_forcas_created,
          preensao_forcas.updated AS preensao_forcas_updated,
          pressao_controles.id AS pressao_controles_id,
          pressao_controles.data AS pressao_controles_data,
          pressao_controles.pressao AS pressao_controles_pressao,
          pressao_controles.created AS pressao_controles_created,
          pressao_controles.updated AS pressao_controles_updated,
          quedas.id AS quedas_id,
          quedas.paciente_id AS quedas_paciente_id,
          quedas.queda AS quedas_queda,
          quedas.data_mes AS quedas_data_mes,
          quedas.data_ano AS quedas_data_ano,
          quedas.fratura AS quedas_fratura,
          quedas.parou_atividade AS quedas_parou_atividade,
          quedas.created AS quedas_created,
          quedas.updated AS quedas_updated,
          quedas.local_queda AS quedas_local_queda,
          quedas.fratura_qual AS quedas_fratura_qual,
          reacoes.id AS reacoes_id,
          reacoes.paciente_id AS reacoes_paciente_id,
          reacoes.medicamento AS reacoes_medicamento,
          reacoes.data AS reacoes_data,
          reacoes.reacoes_adversas_ou_alergicas AS reacoes_reacoes_adversas_ou_alergicas,
          reacoes.created AS reacoes_created,
          reacoes.updated AS reacoes_updated,
          referencias.id AS referencias_id,
          referencias.paciente_id AS referencias_paciente_id,
          referencias.nome AS referencias_nome,
          referencias.data_nascimento AS referencias_data_nascimento,
          referencias.vinculo AS referencias_vinculo,
          referencias.endereco AS referencias_endereco,
          referencias.telefone AS referencias_telefone,
          referencias.celular AS referencias_celular,
          referencias.mora_com_voce AS referencias_mora_com_voce,
          referencias.data_informacao AS referencias_data_informacao,
          referencias.created AS referencias_created,
          referencias.updated AS referencias_updated,
          sarcfs.id AS sarcfs_id,
          sarcfs.paciente_id AS sarcfs_paciente_id,
          sarcfs.p1 AS sarcfs_p1,
          sarcfs.p2 AS sarcfs_p2,
          sarcfs.p3 AS sarcfs_p3,
          sarcfs.p4 AS sarcfs_p4,
          sarcfs.p5 AS sarcfs_p5,
          sarcfs.created AS sarcfs_created,
          sarcfs.updated AS sarcfs_updated,
          sppbs.id AS sppbs_id,
          sppbs.paciente_id AS sppbs_paciente_id,
          sppbs.p1 AS sppbs_p1,
          sppbs.p2 AS sppbs_p2,
          sppbs.p3 AS sppbs_p3,
          sppbs.p4 AS sppbs_p4,
          sppbs.p5 AS sppbs_p5,
          sppbs.p6 AS sppbs_p6,
          sppbs.p7 AS sppbs_p7,
          sppbs.p8 AS sppbs_p8,
          sppbs.p9 AS sppbs_p9,
          sppbs.p10 AS sppbs_p10,
          sppbs.p11 AS sppbs_p11,
          sppbs.p12 AS sppbs_p12,
          sppbs.p13 AS sppbs_p13,
          sppbs.p14 AS sppbs_p14,
          sppbs.created AS sppbs_created,
          sppbs.updated AS sppbs_updated,
          vacinas.id AS vacinas_id,
          vacinas.paciente_id AS vacinas_paciente_id,
          vacinas.nome AS vacinas_nome,
          vacinas.data AS vacinas_data,
          vacinas.lote AS vacinas_lote,
          vacinas.ass AS vacinas_ass,
          vacinas.tipo AS vacinas_tipo,
          vacinas.outra AS vacinas_outra,
          vacinas.created AS vacinas_created,
          vacinas.updated AS vacinas_updated,
          vulnerabilidades.id AS vulnerabilidades_id,
          vulnerabilidades.paciente_id AS vulnerabilidades_paciente_id,
          vulnerabilidades.ano AS vulnerabilidades_ano,
          vulnerabilidades.idade AS vulnerabilidades_idade,
          vulnerabilidades.autopercepcao AS vulnerabilidades_autopercepcao,
          vulnerabilidades.limitacao1 AS vulnerabilidades_limitacao1,
          vulnerabilidades.limitacao2 AS vulnerabilidades_limitacao2,
          vulnerabilidades.limitacao3 AS vulnerabilidades_limitacao3,
          vulnerabilidades.limitacao4 AS vulnerabilidades_limitacao4,
          vulnerabilidades.limitacao5 AS vulnerabilidades_limitacao5,
          vulnerabilidades.limitacao6 AS vulnerabilidades_limitacao6,
          vulnerabilidades.incapacidades1 AS vulnerabilidades_incapacidades1,
          vulnerabilidades.incapacidades2 AS vulnerabilidades_incapacidades2,
          vulnerabilidades.incapacidades3 AS vulnerabilidades_incapacidades3,
          vulnerabilidades.incapacidades4 AS vulnerabilidades_incapacidades4,
          vulnerabilidades.incapacidades5 AS vulnerabilidades_incapacidades5,
          vulnerabilidades.pontuacao_total AS vulnerabilidades_pontuacao_total,
          vulnerabilidades.created AS vulnerabilidades_created,
          vulnerabilidades.updated AS vulnerabilidades_updated
        FROM
          pacientes
          LEFT JOIN agendas ON agendas.paciente_id = pacientes.id
          LEFT JOIN ambientais ON ambientais.paciente_id = pacientes.id
          LEFT JOIN antropometricos ON antropometricos.paciente_id = pacientes.id
          LEFT JOIN atualizacoes ON atualizacoes.paciente_id = pacientes.id
          LEFT JOIN bioimpedancias ON bioimpedancias.paciente_id = pacientes.id
          LEFT JOIN bucal_saudes ON bucal_saudes.paciente_id = pacientes.id
          LEFT JOIN cirurgias ON cirurgias.paciente_id = pacientes.id
          LEFT JOIN complementares ON complementares.paciente_id = pacientes.id
          LEFT JOIN cronicas ON cronicas.paciente_id = pacientes.id
          LEFT JOIN diagnosticos ON diagnosticos.paciente_id = pacientes.id
          LEFT JOIN familiares ON familiares.paciente_id = pacientes.id
          LEFT JOIN fragilidades ON fragilidades.paciente_id = pacientes.id
          LEFT JOIN frrisques ON frrisques.paciente_id = pacientes.id
          LEFT JOIN glicemia_controles ON glicemia_controles.paciente_id = pacientes.id
          LEFT JOIN habitos ON habitos.paciente_id = pacientes.id
          LEFT JOIN infancias ON infancias.paciente_id = pacientes.id
          LEFT JOIN intensidades ON intensidades.paciente_id = pacientes.id
          LEFT JOIN ivcfs ON ivcfs.paciente_id = pacientes.id
          LEFT JOIN laboratorial_exames ON laboratorial_exames.paciente_id = pacientes.id
          LEFT JOIN obitos ON obitos.paciente_id = pacientes.id
          LEFT JOIN pcls ON pcls.paciente_id = pacientes.id  
          LEFT JOIN peso_perdas ON peso_perdas.paciente_id = pacientes.id
          LEFT JOIN pesos ON pesos.paciente_id = pacientes.id
          LEFT JOIN polifarmacias ON polifarmacias.paciente_id = pacientes.id
          LEFT JOIN preensao_forcas ON preensao_forcas.paciente_id = pacientes.id
          LEFT JOIN pressao_controles ON pressao_controles.paciente_id = pacientes.id
          LEFT JOIN quedas ON quedas.paciente_id = pacientes.id
          LEFT JOIN reacoes ON reacoes.paciente_id = pacientes.id
          LEFT JOIN referencias ON referencias.paciente_id = pacientes.id
          LEFT JOIN sarcfs ON sarcfs.paciente_id = pacientes.id
          LEFT JOIN sppbs ON sppbs.paciente_id = pacientes.id
          LEFT JOIN vacinas ON vacinas.paciente_id = pacientes.id
          LEFT JOIN vulnerabilidades ON vulnerabilidades.paciente_id = pacientes.id;
    `,
})
export class DataBaseView {
  @Column({ name: 'paciente_id' })
  pacienteId: number;

  @Column({ length: 100 })
  ubs: string;

  @Column({ length: 500 })
  nome: string;

  @Column({ name: 'nome_social', length: 500 })
  nomeSocial: string;

  @Column({ name: 'n_cartao_sus', length: 100 })
  nCartaoSus: string;

  @Column({ length: 50 })
  identidade: string;

  @Column({ length: 50 })
  cpf: string;

  @Column({ name: 'nome_mae', length: 250 })
  nomeMae: string;

  @Column({ type: 'date', name: 'data_nascimento' })
  dataNascimento: Date;

  @Column({ length: 100 })
  sexo: string;

  @Column({ name: 'nascimento_municipio', length: 250 })
  nascimentoMunicipio: string;

  @Column({ name: 'nascimento_uf', length: 250 })
  nascimentoUf: string;

  @Column({ length: 250 })
  nacionalidade: string;

  @Column({ length: 250 })
  nascimento: string;

  @Column({ type: 'tinyint', name: 'sabe_ler_escrever' })
  sabeLerEscrever: number;

  @Column({ length: 250 })
  escolaridade: string;

  @Column({ name: 'raca_cor', length: 250 })
  racaCor: string;

  @Column({ name: 'qual_etinia', length: 250 })
  qualEtnia: string;

  @Column({ length: 250 })
  religiao: string;

  @Column({ name: 'religiao_qual', length: 250 })
  religiaoQual: string;

  @Column({ length: 250 })
  ocupacao: string;

  @Column({ name: 'situacao_conjugal', length: 250 })
  situacaoConjugal: string;

  @Column({ name: 'viuvo_desde', length: 250 })
  viuvoDesde: string;

  @Column({ name: 'unidade_basica', length: 250 })
  unidadeBasica: string;

  @Column({ name: 'alergia_maior_gravidade', length: 250 })
  alergiaMaiorGravidade: string;

  @Column({ type: 'tinyint' })
  deficiencia: number;

  @Column({ name: 'deficiencia_qual', length: 250 })
  deficienciaQual: string;

  @Column({ name: 'deficiencia_especificar', length: 250 })
  deficienciaEspecificar: string;

  @Column({ name: 'grupo_sanguineo', length: 250 })
  grupoSanguineo: string;

  @Column({ name: 'fator_rh', length: 250 })
  fatorRh: string;

  @Column({ type: 'tinyint', name: 'possui_internet' })
  possuiInternet: number;

  @Column({ length: 250 })
  rua: string;

  @Column({ length: 250 })
  numero: string;

  @Column({ length: 250 })
  complemento: string;

  @Column({ length: 250 })
  bairro: string;

  @Column({ name: 'ponto_referencia', length: 250 })
  pontoReferencia: string;

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

  @Column({ name: 'numero_identificacao', length: 100 })
  numeroIdentificacao: string;

  @Column({ name: 'created' })
  created: Date;

  @Column({ name: 'updated' })
  updated: Date;

  // Relações com outras tabelas (exemplo):

  @Column({ name: 'agendas_id' })
  agendasId: number;

  @Column({ name: 'agendas_data', type: 'date' })
  agendasData: Date;

  @Column({ name: 'agendas_hora', length: 500 })
  agendasHora: string;

  @Column({ name: 'agendas_local', length: 500 })
  agendasLocal: string;

  @Column({ name: 'agendas_tipo', length: 500 })
  agendasTipo: string;

  @Column({ name: 'agendas_profissional', length: 500 })
  agendasProfissional: string;

  @Column({ name: 'agendas_created' })
  agendasCreated: Date;

  @Column({ name: 'agendas_updated' })
  agendasUpdated: Date;

  @Column({ name: 'ambientais_id' })
  ambientaisId: number;

  @Column({ name: 'ambientais_paciente_id' })
  ambientaisPacienteId: number;

  @Column({ name: 'ambientais_ano' })
  ambientaisAno: number;

  @Column({ name: 'ambientais_p1', type: 'tinyint' })
  ambientaisP1: number;

  @Column({ name: 'ambientais_p2', type: 'tinyint' })
  ambientaisP2: number;

  @Column({ name: 'ambientais_p3', type: 'tinyint' })
  ambientaisP3: number;

  @Column({ name: 'ambientais_p4', type: 'tinyint' })
  ambientaisP4: number;

  @Column({ name: 'ambientais_p5', type: 'tinyint' })
  ambientaisP5: number;

  @Column({ name: 'ambientais_p6', type: 'tinyint' })
  ambientaisP6: number;

  @Column({ name: 'ambientais_p7', type: 'tinyint' })
  ambientaisP7: number;

  @Column({ name: 'ambientais_p8', type: 'tinyint' })
  ambientaisP8: number;

  @Column({ name: 'ambientais_p9', type: 'tinyint' })
  ambientaisP9: number;

  @Column({ name: 'ambientais_p10', type: 'tinyint' })
  ambientaisP10: number;

  @Column({ name: 'ambientais_p11', type: 'tinyint' })
  ambientaisP11: number;

  @Column({ name: 'ambientais_created' })
  ambientaisCreated: Date;

  @Column({ name: 'ambientais_updated' })
  ambientaisUpdated: Date;

  @Column({ name: 'antropometricos_id' })
  antropometricosId: number;

  @Column({ name: 'antropometricos_paciente_id' })
  antropometricosPacienteId: number;

  @Column({ name: 'antropometricos_ano' })
  antropometricosAno: number;

  @Column({ type: 'float' })
  peso: number;

  @Column({ type: 'float' })
  altura: number;

  @Column({ type: 'float' })
  imc: number;

  @Column({ name: 'perimetro_panturrilha', type: 'float' })
  perimetroPanturrilha: number;

  @Column({ name: 'antropometricos_created' })
  antropometricosCreated: Date;

  @Column({ name: 'antropometricos_updated' })
  antropometricosUpdated: Date;

  @Column({ name: 'atualizacoes_id' })
  atualizacoesId: number;

  @Column({ name: 'atualizacoes_paciente_id' })
  atualizacoesPacienteId: number;

  @Column({ name: 'atualizacoes_data', type: 'date' })
  atualizacoesData: Date;

  @Column({ name: 'atualizacoes_responsavel', length: 500 })
  atualizacoesResponsavel: string;

  @Column({ name: 'atualizacoes_created' })
  atualizacoesCreated: Date;

  @Column({ name: 'atualizacoes_updated' })
  atualizacoesUpdated: Date;

  @Column({ name: 'bioimpedancias_id' })
  bioimpedanciasId: number;

  @Column({ name: 'bioimpedancias_paciente_id' })
  bioimpedanciasPacienteId: number;

  @Column({ name: 'bioimpedancias_p1', type: 'float' })
  bioimpedanciasP1: number;

  @Column({ name: 'bioimpedancias_p2', type: 'float' })
  bioimpedanciasP2: number;

  @Column({ name: 'bioimpedancias_p3', type: 'float' })
  bioimpedanciasP3: number;

  @Column({ name: 'bioimpedancias_p4', type: 'float' })
  bioimpedanciasP4: number;

  @Column({ name: 'bioimpedancias_p5', type: 'float' })
  bioimpedanciasP5: number;

  @Column({ name: 'bioimpedancias_p6', type: 'float' })
  bioimpedanciasP6: number;

  @Column({ name: 'bioimpedancias_p7', type: 'float' })
  bioimpedanciasP7: number;

  @Column({ name: 'bioimpedancias_p8', type: 'float' })
  bioimpedanciasP8: number;

  @Column({ name: 'bioimpedancias_p9', type: 'float' })
  bioimpedanciasP9: number;

  @Column({ name: 'bioimpedancias_p10', type: 'float' })
  bioimpedanciasP10: number;

  @Column({ name: 'bioimpedancias_p11', type: 'float' })
  bioimpedanciasP11: number;

  @Column({ name: 'bioimpedancias_p12', type: 'float' })
  bioimpedanciasP12: number;

  @Column({ name: 'bioimpedancias_p13', type: 'float' })
  bioimpedanciasP13: number;

  @Column({ name: 'bioimpedancias_p14', type: 'float' })
  bioimpedanciasP14: number;

  @Column({ name: 'bioimpedancias_p15', type: 'float' })
  bioimpedanciasP15: number;

  @Column({ name: 'bioimpedancias_p16', type: 'float' })
  bioimpedanciasP16: number;

  @Column({ name: 'bioimpedancias_p17', type: 'float' })
  bioimpedanciasP17: number;

  @Column({ name: 'bioimpedancias_p18', type: 'float' })
  bioimpedanciasP18: number;

  @Column({ name: 'bioimpedancias_p19', type: 'float' })
  bioimpedanciasP19: number;

  @Column({ name: 'bioimpedancias_p20', type: 'float' })
  bioimpedanciasP20: number;

  @Column({ name: 'bioimpedancias_p21', type: 'float' })
  bioimpedanciasP21: number;

  @Column({ name: 'bioimpedancias_p22', type: 'float' })
  bioimpedanciasP22: number;

  @Column({ name: 'bioimpedancias_p23', type: 'float' })
  bioimpedanciasP23: number;

  @Column({ name: 'bioimpedancias_p24', type: 'float' })
  bioimpedanciasP24: number;

  @Column({ name: 'bioimpedancias_p25', type: 'float' })
  bioimpedanciasP25: number;

  @Column({ name: 'bioimpedancias_created' })
  bioimpedanciasCreated: Date;

  @Column({ name: 'bioimpedancias_updated' })
  bioimpedanciasUpdated: Date;

  // Tabela bucal_saudes
  @Column({ name: 'bucal_saudes_id' })
  bucalSaudesId: number;

  @Column({ name: 'bucal_saudes_paciente_id' })
  bucalSaudesPacienteId: number;

  @Column({ name: 'bucal_saudes_ano' })
  bucalSaudesAno: number;

  @Column({ name: 'bucal_saudes_p1', type: 'int' })
  bucalSaudesP1: number;

  @Column({ name: 'bucal_saudes_p2', type: 'int' })
  bucalSaudesP2: number;

  @Column({ name: 'bucal_saudes_p3', type: 'int' })
  bucalSaudesP3: number;

  @Column({ name: 'bucal_saudes_p4', type: 'int' })
  bucalSaudesP4: number;

  @Column({ name: 'bucal_saudes_p5', type: 'int' })
  bucalSaudesP5: number;

  @Column({ name: 'bucal_saudes_p6', type: 'int' })
  bucalSaudesP6: number;

  @Column({ name: 'bucal_saudes_p7', type: 'int' })
  bucalSaudesP7: number;

  @Column({ name: 'bucal_saudes_p8', type: 'int' })
  bucalSaudesP8: number;

  @Column({ name: 'bucal_saudes_p9', type: 'int' })
  bucalSaudesP9: number;

  @Column({ name: 'bucal_saudes_p10', type: 'int' })
  bucalSaudesP10: number;

  @Column({ name: 'bucal_saudes_p11', type: 'int' })
  bucalSaudesP11: number;

  @Column({ name: 'bucal_saudes_p12', type: 'int' })
  bucalSaudesP12: number;

  @Column({ name: 'bucal_saudes_p13', type: 'int' })
  bucalSaudesP13: number;

  @Column({ name: 'bucal_saudes_p14', type: 'int' })
  bucalSaudesP14: number;

  @Column({ name: 'bucal_saudes_p15', type: 'int' })
  bucalSaudesP15: number;

  @Column({ name: 'bucal_saudes_p16', type: 'int' })
  bucalSaudesP16: number;

  @Column({ name: 'bucal_saudes_p17', type: 'int' })
  bucalSaudesP17: number;

  @Column({ name: 'bucal_saudes_p18', type: 'int' })
  bucalSaudesP18: number;

  @Column({ name: 'bucal_saudes_p19', type: 'int' })
  bucalSaudesP19: number;

  @Column({ name: 'bucal_saudes_p20', type: 'int' })
  bucalSaudesP20: number;

  @Column({ name: 'bucal_saudes_p21', type: 'int' })
  bucalSaudesP21: number;

  @Column({ name: 'bucal_saudes_p22', type: 'int' })
  bucalSaudesP22: number;

  @Column({ name: 'bucal_saudes_p23', type: 'int' })
  bucalSaudesP23: number;

  @Column({ name: 'bucal_saudes_p24', type: 'int' })
  bucalSaudesP24: number;

  @Column({ name: 'bucal_saudes_p25', type: 'int' })
  bucalSaudesP25: number;

  @Column({ name: 'bucal_saudes_p26', type: 'int' })
  bucalSaudesP26: number;

  @Column({ name: 'bucal_saudes_p27', type: 'int' })
  bucalSaudesP27: number;

  @Column({ name: 'bucal_saudes_p28', type: 'int' })
  bucalSaudesP28: number;

  @Column({ name: 'bucal_saudes_p29', type: 'int' })
  bucalSaudesP29: number;

  @Column({ name: 'bucal_saudes_p30', type: 'int' })
  bucalSaudesP30: number;

  @Column({ name: 'bucal_saudes_p31', type: 'int' })
  bucalSaudesP31: number;

  @Column({ name: 'bucal_saudes_p32', type: 'varchar', length: 500 })
  bucalSaudesP32: string;

  @Column({ name: 'bucal_saudes_created' })
  bucalSaudesCreated: Date;

  @Column({ name: 'bucal_saudes_updated' })
  bucalSaudesUpdated: Date;

  @PrimaryGeneratedColumn({ name: 'cirurgias_id' })
  cirurgiasId: number;

  @Column({ name: 'cirurgias_paciente_id' })
  cirurgiasPacienteId: number;

  @Column({ name: 'cirurgias_cirurgia', length: 500 })
  cirurgiasCirurgia: string;

  @Column({ name: 'cirurgias_ano' })
  cirurgiasAno: number;

  @Column({ name: 'cirurgias_observacao', type: 'text' })
  cirurgiasObservacao: string;

  @Column({ name: 'cirurgias_created' })
  cirurgiasCreated: Date;

  @Column({ name: 'cirurgias_updated' })
  cirurgiasUpdated: Date;

  @Column({ name: 'complementares_id' })
  complementaresId: number;

  @Column({ name: 'complementares_paciente_id' })
  complementaresPacienteId: number;

  @Column({ name: 'complementares_ano' })
  complementaresAno: number;

  @Column({ name: 'complementares_p1', type: 'int' })
  complementaresP1: number;

  @Column({ name: 'complementares_p2', type: 'int' })
  complementaresP2: number;

  @Column({ name: 'complementares_p3', type: 'int' })
  complementaresP3: number;

  @Column({ name: 'complementares_p4', type: 'int' })
  complementaresP4: number;

  @Column({ name: 'complementares_p5', type: 'int' })
  complementaresP5: number;

  @Column({ name: 'complementares_created' })
  complementaresCreated: Date;

  @Column({ name: 'complementares_updated' })
  complementaresUpdated: Date;

  // Tabela cronicas
  @Column({ name: 'cronicas_id' })
  cronicasId: number;

  @Column({ name: 'cronicas_paciente_id' })
  cronicasPacienteId: number;

  @Column({ name: 'cronicas_ano' })
  cronicasAno: number;

  @Column({ name: 'cronicas_p1', type: 'int' })
  cronicasP1: number;

  @Column({ name: 'cronicas_p2', type: 'int' })
  cronicasP2: number;

  @Column({ name: 'cronicas_p3', type: 'int' })
  cronicasP3: number;

  @Column({ name: 'cronicas_p4', type: 'int' })
  cronicasP4: number;

  @Column({ name: 'cronicas_created' })
  cronicasCreated: Date;

  @Column({ name: 'cronicas_updated' })
  cronicasUpdated: Date;

  // Tabela diagnosticos
  @Column({ name: 'diagnosticos_id' })
  diagnosticosId: number;

  @Column({ name: 'diagnosticos_paciente_id' })
  diagnosticosPacienteId: number;

  @Column({ name: 'diagnosticos_tipo', length: 100 })
  diagnosticosTipo: string;

  @Column({ name: 'diagnosticos_tipo_outro', length: 250 })
  diagnosticosTipoOutro: string;

  @Column({ name: 'diagnosticos_ano_diagnostico' })
  diagnosticosAnoDiagnostico: number;

  @Column({ name: 'diagnosticos_ano_internacao' })
  diagnosticosAnoInternacao: number;

  @Column({ name: 'diagnosticos_tempo_internacao', length: 250 })
  diagnosticosTempoInternacao: string;

  @Column({ name: 'diagnosticos_created' })
  diagnosticosCreated: Date;

  @Column({ name: 'diagnosticos_updated' })
  diagnosticosUpdated: Date;

  @Column({ name: 'familiares_id' })
  familiaresId: number;

  @Column({ name: 'familiares_paciente_id' })
  familiaresPacienteId: number;

  @Column({ name: 'familiares_ano' })
  familiaresAno: number;

  @Column({ name: 'familiares_p1', type: 'int' })
  familiaresP1: number;

  @Column({ name: 'familiares_p2', type: 'int' })
  familiaresP2: number;

  @Column({ name: 'familiares_p3', type: 'int' })
  familiaresP3: number;

  @Column({ name: 'familiares_p4', type: 'int' })
  familiaresP4: number;

  @Column({ name: 'familiares_p5', type: 'int' })
  familiaresP5: number;

  @Column({ name: 'familiares_p6', type: 'int' })
  familiaresP6: number;

  @Column({ name: 'familiares_p7', type: 'int' })
  familiaresP7: number;

  @Column({ name: 'familiares_p8', type: 'int' })
  familiaresP8: number;

  @Column({ name: 'familiares_p9', type: 'int' })
  familiaresP9: number;

  @Column({ name: 'familiares_p10', type: 'int' })
  familiaresP10: number;

  @Column({ name: 'familiares_p11', type: 'int' })
  familiaresP11: number;

  @Column({ name: 'familiares_p12', type: 'int' })
  familiaresP12: number;

  @Column({ name: 'familiares_created' })
  familiaresCreated: Date;

  @Column({ name: 'familiares_updated' })
  familiaresUpdated: Date;

  // Tabela fragilidades
  @Column({ name: 'fragilidades_id' })
  fragilidadesId: number;

  @Column({ name: 'fragilidades_paciente_id' })
  fragilidadesPacienteId: number;

  @Column({ name: 'fragilidades_p1', type: 'int' })
  fragilidadesP1: number;

  @Column({ name: 'fragilidades_p2_2', type: 'int' })
  fragilidadesP2_2: number;

  @Column({ name: 'fragilidades_p3_3', type: 'int' })
  fragilidadesP3_3: number;

  @Column({ name: 'fragilidades_p4_2', type: 'int' })
  fragilidadesP4_2: number;

  @Column({ name: 'fragilidades_p5_1a_2', type: 'int' })
  fragilidadesP5_1a_2: number;

  @Column({ name: 'fragilidades_p5_2a_2', type: 'int' })
  fragilidadesP5_2a_2: number;

  @Column({ name: 'fragilidades_p5_3a_2', type: 'int' })
  fragilidadesP5_3a_2: number;

  @Column({ name: 'fragilidades_baixo_nivel_atividade_fisica', type: 'int' })
  fragilidadesBaixoNivelAtividadeFisica: number;

  @Column({ name: 'fragilidades_created' })
  fragilidadesCreated: Date;

  @Column({ name: 'fragilidades_updated' })
  fragilidadesUpdated: Date;

  @Column({ name: 'fragilidades_p2_1', length: 255 })
  fragilidadesP2_1: string;

  @Column({ name: 'fragilidades_p3_1', length: 255 })
  fragilidadesP3_1: string;

  @Column({ name: 'fragilidades_p3_2', length: 255 })
  fragilidadesP3_2: string;

  @Column({ name: 'fragilidades_p4_1', length: 255 })
  fragilidadesP4_1: string;

  @Column({ name: 'fragilidades_p5_1a_1', length: 255 })
  fragilidadesP5_1a_1: string;

  @Column({ name: 'fragilidades_p5_1b_1', length: 255 })
  fragilidadesP5_1b_1: string;

  @Column({ name: 'fragilidades_p5_1b_2', length: 255 })
  fragilidadesP5_1b_2: string;

  @Column({ name: 'fragilidades_p5_2a_1', length: 255 })
  fragilidadesP5_2a_1: string;

  @Column({ name: 'fragilidades_p5_2b_1', length: 255 })
  fragilidadesP5_2b_1: string;

  @Column({ name: 'fragilidades_p5_2b_2', length: 255 })
  fragilidadesP5_2b_2: string;

  @Column({ name: 'fragilidades_p5_3a_1', length: 255 })
  fragilidadesP5_3a_1: string;

  @Column({ name: 'fragilidades_p5_3b_1', length: 255 })
  fragilidadesP5_3b_1: string;

  @Column({ name: 'fragilidades_p5_3b_2', length: 255 })
  fragilidadesP5_3b_2: string;

  @Column({ name: 'fragilidades_p5_4a_1', length: 255 })
  fragilidadesP5_4a_1: string;

  @Column({ name: 'fragilidades_p5_4a_2', length: 255 })
  fragilidadesP5_4a_2: string;

  @Column({ name: 'fragilidades_p5_4b_1', length: 255 })
  fragilidadesP5_4b_1: string;

  @Column({ name: 'fragilidades_p5_4b_2', length: 255 })
  fragilidadesP5_4b_2: string;

  @Column({ name: 'fragilidades_ipaq', length: 255 })
  fragilidadesIpaq: string;

  @Column({ name: 'fragilidades_classificacao_da_fragilidade', length: 255 })
  fragilidadesClassificacaoDaFragilidade: string;

  @Column({ name: 'frrisques_id' })
  frrisquesId: number;

  @Column({ name: 'frrisques_paciente_id' })
  frrisquesPacienteId: number;

  @Column({ name: 'frrisques_p1', type: 'int' })
  frrisquesP1: number;

  @Column({ name: 'frrisques_p2', type: 'int' })
  frrisquesP2: number;

  @Column({ name: 'frrisques_p3', type: 'int' })
  frrisquesP3: number;

  @Column({ name: 'frrisques_p4', type: 'int' })
  frrisquesP4: number;

  @Column({ name: 'frrisques_p5', type: 'int' })
  frrisquesP5: number;

  @Column({ name: 'frrisques_p6', type: 'int' })
  frrisquesP6: number;

  @Column({ name: 'frrisques_p7', type: 'int' })
  frrisquesP7: number;

  @Column({ name: 'frrisques_p8', type: 'int' })
  frrisquesP8: number;

  @Column({ name: 'frrisques_p9', type: 'int' })
  frrisquesP9: number;

  @Column({ name: 'frrisques_p10', type: 'int' })
  frrisquesP10: number;

  @Column({ name: 'glicemia_controles_id' })
  glicemiaControlesId: number;

  @Column({ name: 'glicemia_controles_paciente_id' })
  glicemiaControlesPacienteId: number;

  @Column({ name: 'glicemia_controles_data', type: 'date' })
  glicemiaControlesData: Date;

  @Column({ name: 'glicemia_controles_tipo', length: 250 })
  glicemiaControlesTipo: string;

  @Column({ name: 'glicemia_controles_valor', type: 'float' })
  glicemiaControlesValor: number;

  @Column({ name: 'glicemia_controles_created' })
  glicemiaControlesCreated: Date;

  @Column({ name: 'glicemia_controles_updated' })
  glicemiaControlesUpdated: Date;

  // Tabela habitos
  @Column({ name: 'habitos_id' })
  habitosId: number;

  @Column({ name: 'habitos_paciente_id' })
  habitosPacienteId: number;

  @Column({ name: 'habitos_ano' })
  habitosAno: number;

  @Column({ name: 'habitos_p1', type: 'int' })
  habitosP1: number;

  @Column({ name: 'habitos_p2', type: 'int' })
  habitosP2: number;

  @Column({ name: 'habitos_p3', type: 'int' })
  habitosP3: number;

  @Column({ name: 'habitos_p4', type: 'int' })
  habitosP4: number;

  @Column({ name: 'habitos_p5', type: 'int' })
  habitosP5: number;

  @Column({ name: 'habitos_p6', type: 'int' })
  habitosP6: number;

  @Column({ name: 'habitos_p7', type: 'int' })
  habitosP7: number;

  @Column({ name: 'habitos_p8', type: 'int' })
  habitosP8: number;

  @Column({ name: 'habitos_p9', type: 'int' })
  habitosP9: number;

  @Column({ name: 'habitos_p10', type: 'int' })
  habitosP10: number;

  @Column({ name: 'habitos_p11', type: 'int' })
  habitosP11: number;

  @Column({ name: 'habitos_p12', type: 'int' })
  habitosP12: number;

  @Column({ name: 'habitos_p13', type: 'int' })
  habitosP13: number;

  @Column({ name: 'habitos_p14', type: 'int' })
  habitosP14: number;

  @Column({ name: 'habitos_p15', type: 'int' })
  habitosP15: number;

  @Column({ name: 'habitos_p16', type: 'int' })
  habitosP16: number;

  @Column({ name: 'habitos_p17', type: 'int' })
  habitosP17: number;

  @Column({ name: 'habitos_p18', type: 'int' })
  habitosP18: number;

  @Column({ name: 'habitos_p19', type: 'int' })
  habitosP19: number;

  @Column({ name: 'habitos_created' })
  habitosCreated: Date;

  @Column({ name: 'habitos_updated' })
  habitosUpdated: Date;

  // Tabela infancias
  @Column({ name: 'infancias_id' })
  infanciasId: number;

  @Column({ name: 'infancias_paciente_id' })
  infanciasPacienteId: number;

  @Column({ name: 'infancias_a1', length: 100 })
  infanciasA1: string;

  @Column({ name: 'infancias_a2_a', length: 250 })
  infanciasA2A: string;

  @Column({ name: 'infancias_a2_b', length: 100 })
  infanciasA2B: string;

  @Column({ name: 'infancias_a3_a', length: 250 })
  infanciasA3A: string;

  @Column({ name: 'infancias_a3_b', length: 100 })
  infanciasA3B: string;

  @Column({ name: 'infancias_a4', length: 100 })
  infanciasA4: string;

  @Column({ name: 'infancias_a5_a', length: 100 })
  infanciasA5A: string;

  @Column({ name: 'infancias_a5_b', length: 100 })
  infanciasA5B: string;

  @Column({ name: 'infancias_a5_c', length: 100 })
  infanciasA5C: string;

  @Column({ name: 'infancias_a5_d', length: 100 })
  infanciasA5D: string;

  @Column({ name: 'infancias_a5_e', length: 100 })
  infanciasA5E: string;

  @Column({ name: 'infancias_a5_f', length: 100 })
  infanciasA5F: string;

  @Column({ name: 'infancias_a5_g', length: 100 })
  infanciasA5G: string;

  @Column({ name: 'infancias_a5_h', length: 250 })
  infanciasA5H: string;

  @Column({ name: 'infancias_a6', length: 100 })
  infanciasA6: string;

  @Column({ name: 'infancias_a7', length: 100 })
  infanciasA7: string;

  @Column({ name: 'infancias_b1', length: 100 })
  infanciasB1: string;

  @Column({ name: 'infancias_b2', length: 100 })
  infanciasB2: string;

  @Column({ name: 'infancias_b3_a', length: 100 })
  infanciasB3A: string;

  @Column({ name: 'infancias_b3_b', length: 100 })
  infanciasB3B: string;

  @Column({ name: 'infancias_b4', length: 100 })
  infanciasB4: string;

  @Column({ name: 'infancias_b5', length: 100 })
  infanciasB5: string;

  @Column({ name: 'infancias_b6', length: 100 })
  infanciasB6: string;

  @Column({ name: 'infancias_created' })
  infanciasCreated: Date;

  @Column({ name: 'infancias_updated' })
  infanciasUpdated: Date;

  // Tabela intensidades
  @Column({ name: 'intensidades_id' })
  intensidadesId: number;

  @Column({ name: 'intensidades_paciente_id' })
  intensidadesPacienteId: number;

  @Column({ name: 'intensidades_data', type: 'date' })
  intensidadesData: Date;

  @Column({ name: 'intensidades_local_dor', length: 500 })
  intensidadesLocalDor: string;

  @Column({ name: 'intensidades_intensidade' })
  intensidadesIntensidade: number;

  @Column({ name: 'intensidades_created' })
  intensidadesCreated: Date;

  @Column({ name: 'intensidades_updated' })
  intensidadesUpdated: Date;

  @Column()
  ivcfs_id: number;

  @Column()
  ivcfs_paciente_id: number;

  @Column()
  ivcfs_p1: number;

  @Column()
  ivcfs_p2: number;

  @Column()
  ivcfs_p3: number;

  @Column()
  ivcfs_p4: number;

  @Column()
  ivcfs_p5: number;

  @Column()
  ivcfs_p6: number;

  @Column()
  ivcfs_p7: number;

  @Column()
  ivcfs_p8: number;

  @Column()
  ivcfs_p9: number;

  @Column()
  ivcfs_p10: number;

  @Column()
  ivcfs_p11: number;

  @Column()
  ivcfs_p12: number;

  @Column()
  ivcfs_p13: number;

  @Column()
  ivcfs_p14: number;

  @Column({ type: 'tinyint' })
  ivcfs_p14_1: number;

  @Column({ type: 'tinyint' })
  ivcfs_p14_2: number;

  @Column({ type: 'tinyint' })
  ivcfs_p14_3: number;

  @Column({ type: 'tinyint' })
  ivcfs_p14_4: number;

  @Column()
  ivcfs_p15: number;

  @Column()
  ivcfs_p16: number;

  @Column()
  ivcfs_p17: number;

  @Column()
  ivcfs_p18: number;

  @Column()
  ivcfs_p19: number;

  @Column()
  ivcfs_p20: number;

  @Column({ type: 'tinyint' })
  ivcfs_p20_1: number;

  @Column({ type: 'tinyint' })
  ivcfs_p20_2: number;

  @Column({ type: 'tinyint' })
  ivcfs_p20_3: number;

  @Column()
  ivcfs_p21: number;

  @Column()
  ivcfs_p22: number;

  @Column({ type: 'datetime', precision: 6 })
  ivcfs_created: Date;

  @Column({ type: 'datetime', precision: 6 })
  ivcfs_updated: Date;

  @Column()
  laboratorial_exames_id: number;

  @Column()
  laboratorial_exames_paciente_id: number;

  @Column({ length: 100 })
  laboratorial_exames_hemograma: string;

  @Column({ length: 100 })
  laboratorial_exames_plaquetas: string;

  @Column({ length: 100 })
  laboratorial_exames_contagem: string;

  @Column({ length: 100 })
  laboratorial_exames_mpv: string;

  @Column({ length: 100 })
  laboratorial_exames_observacoes_morfologicas: string;

  @Column({ length: 100 })
  laboratorial_exames_vsh: string;

  @Column({ length: 100 })
  laboratorial_exames_classifi_sanguinea: string;

  @Column({ length: 100 })
  laboratorial_exames_ic: string;

  @Column({ length: 100 })
  laboratorial_exames_ts: string;

  @Column({ length: 100 })
  laboratorial_exames_glicemia_de_jejum: string;

  @Column({ length: 100 })
  laboratorial_exames_hb_glicosilada: string;

  @Column({ length: 100 })
  laboratorial_exames_ureia: string;

  @Column({ length: 100 })
  laboratorial_exames_creatina: string;

  @Column({ length: 100 })
  laboratorial_exames_sodio: string;

  @Column({ length: 100 })
  laboratorial_exames_potassio: string;

  @Column({ length: 100 })
  laboratorial_exames_colesterol_total: string;

  @Column({ length: 100 })
  laboratorial_exames_hdl: string;

  @Column({ length: 100 })
  laboratorial_exames_ldl: string;

  @Column({ length: 100 })
  laboratorial_exames_triglicerides: string;

  @Column({ length: 100 })
  laboratorial_exames_hiv: string;

  @Column({ length: 100 })
  laboratorial_exames_tgo: string;

  @Column({ length: 100 })
  laboratorial_exames_tgp: string;

  @Column({ length: 100 })
  laboratorial_exames_bt_e_fracoes: string;

  @Column({ length: 100 })
  laboratorial_exames_acido_urico: string;

  @Column({ length: 100 })
  laboratorial_exames_psa: string;

  @Column({ length: 100 })
  laboratorial_exames_t3: string;

  @Column({ length: 100 })
  laboratorial_exames_t4: string;

  @Column({ length: 100 })
  laboratorial_exames_tsh: string;

  @Column({ length: 100 })
  laboratorial_exames_aslo: string;

  @Column({ length: 100 })
  laboratorial_exames_latex: string;

  @Column({ length: 100 })
  laboratorial_exames_pcr: string;

  @Column({ length: 100 })
  laboratorial_exames_mucoproteina: string;

  @Column({ length: 100 })
  laboratorial_exames_celula_le: string;

  @Column({ length: 100 })
  laboratorial_exames_vdrl: string;

  @Column({ length: 100 })
  laboratorial_exames_eas: string;

  @Column({ length: 100 })
  laboratorial_exames_epf: string;

  @Column({ length: 100 })
  laboratorial_exames_determinacao_do_fator_reumatoide: string;

  @Column({ length: 100 })
  laboratorial_exames_eritrograma_eritrocitos: string;

  @Column({ length: 100 })
  laboratorial_exames_eritrograma_hemoglobina: string;

  @Column({ length: 100 })
  laboratorial_exames_eritrograma_hematocrito: string;

  @Column({ length: 100 })
  laboratorial_exames_eritrograma_vcm: string;

  @Column({ length: 100 })
  laboratorial_exames_eritrograma_hcm: string;

  @Column({ length: 100 })
  laboratorial_exames_eritrograma_chcm: string;

  @Column({ length: 100 })
  laboratorial_exames_eritrograma_rdw: string;

  @Column({ length: 100 })
  laboratorial_exames_eritrograma_rdw_fl: string;

  @Column({ length: 100 })
  laboratorial_exames_leucograma_leucocitos: string;

  @Column({ length: 100 })
  laboratorial_exames_leucograma_promielocitos: string;

  @Column({ length: 100 })
  laboratorial_exames_leucograma_mielocitos: string;

  @Column({ length: 100 })
  laboratorial_exames_leucograma_metamielocitos: string;

  @Column({ length: 100 })
  laboratorial_exames_leucograma_neutrofilos_em_bastao: string;

  @Column({ length: 100 })
  laboratorial_exames_leucograma_eosinofilos: string;

  @Column({ length: 100 })
  laboratorial_exames_leucograma_basofilos: string;

  @Column({ length: 100 })
  laboratorial_exames_leucograma_linfocitos: string;

  @Column({ length: 100 })
  laboratorial_exames_leucograma_monocitos: string;

  @Column({ type: 'datetime' })
  laboratorial_exames_created: Date;

  @Column({ type: 'datetime' })
  laboratorial_exames_updated: Date;

  @Column({ length: 255 })
  laboratorial_exames_leucograma_neutrofilos_segmentados: string;

  @Column()
  obitos_id: number;

  @Column({ type: 'number' })
  obitos_obito: number;

  @Column({ length: 250 })
  obitos_quando: string;

  @Column({ length: 500 })
  obitos_motivo: string;

  @Column({ type: 'datetime' })
  obitos_created: Date;

  @Column({ type: 'datetime' })
  obitos_updated: Date;

  @Column()
  pcls_id: number;

  @Column()
  pcls_p1: number;

  @Column()
  pcls_p2: number;

  @Column()
  pcls_p3: number;

  @Column()
  pcls_p4: number;

  @Column()
  pcls_p5: number;

  @Column()
  pcls_p6: number;

  @Column()
  pcls_p7: number;

  @Column()
  pcls_p8: number;

  @Column()
  pcls_p9: number;

  @Column()
  pcls_p10: number;

  @Column()
  pcls_p11: number;

  @Column()
  pcls_p12: number;

  @Column()
  pcls_p13: number;

  @Column()
  pcls_p14: number;

  @Column()
  pcls_p15: number;

  @Column()
  pcls_p16: number;

  @Column()
  pcls_p17: number;

  @Column()
  pcls_p18: number;

  @Column()
  pcls_p19: number;

  @Column()
  pcls_p20: number;

  @Column()
  pcls_p21: number;

  @Column()
  pcls_p22: number;

  @Column()
  pcls_p23: number;

  @Column()
  pcls_p24: number;

  @Column()
  pcls_p25: number;

  @Column()
  pcls_p26: number;

  @Column()
  pcls_p27: number;

  @Column()
  pcls_p28: number;

  @Column()
  pcls_p29: number;

  @Column()
  pcls_p30: number;

  @Column()
  pcls_p31: number;

  @Column()
  pcls_p32: number;

  @Column()
  pcls_p33: number;

  @Column({ type: 'datetime' })
  pcls_created: Date;

  @Column({ type: 'datetime' })
  pcls_updated: Date;

  @Column()
  peso_perdas_id: number;

  @Column()
  peso_perdas_ano: number;

  @Column({ type: 'number' })
  peso_perdas_perda_peso: number;

  @Column({ type: 'datetime' })
  peso_perdas_created: Date;

  @Column({ type: 'datetime' })
  peso_perdas_updated: Date;

  @Column()
  pesos_id: number;

  @Column()
  pesos_ano: number;

  @Column({ type: 'float' })
  pesos_peso: number;

  @Column({ type: 'datetime' })
  pesos_created: Date;

  @Column({ type: 'datetime' })
  pesos_updated: Date;

  @Column()
  polifarmacias_id: number;

  @Column({ type: 'number' })
  polifarmacias_uso_concomitante: number;

  @Column({ type: 'datetime' })
  polifarmacias_created: Date;

  @Column({ type: 'datetime' })
  polifarmacias_updated: Date;

  @Column()
  preensao_forcas_id: number;

  @Column({ type: 'float' })
  preensao_forcas_medida_1: number;

  @Column({ type: 'float' })
  preensao_forcas_medida_2: number;

  @Column({ type: 'float' })
  preensao_forcas_medida_3: number;

  @Column({ length: 100 })
  preensao_forcas_membro_dominante: string;

  @Column({ type: 'datetime' })
  preensao_forcas_created: Date;

  @Column({ type: 'datetime' })
  preensao_forcas_updated: Date;

  @Column()
  pressao_controles_id: number;

  @Column({ type: 'date' })
  pressao_controles_data: Date;

  @Column({ length: 100 })
  pressao_controles_pressao: string;

  @Column({ type: 'datetime' })
  pressao_controles_created: Date;

  @Column({ type: 'datetime' })
  pressao_controles_updated: Date;

  @Column()
  quedas_id: number;

  @Column()
  quedas_paciente_id: number;

  @Column({ type: 'number' })
  quedas_queda: number;

  @Column({ type: 'number' })
  quedas_data_mes: number;

  @Column({ type: 'number' })
  quedas_data_ano: number;

  @Column({ type: 'number' })
  quedas_fratura: number;

  @Column({ type: 'number' })
  quedas_parou_atividade: number;

  @Column({ type: 'datetime' })
  quedas_created: Date;

  @Column({ type: 'datetime' })
  quedas_updated: Date;

  @Column({ length: 255 })
  quedas_local_queda: string;

  @Column({ length: 255 })
  quedas_fratura_qual: string;

  @Column()
  reacoes_id: number;

  @Column()
  reacoes_paciente_id: number;

  @Column({ length: 250 })
  reacoes_medicamento: string;

  @Column({ type: 'int' })
  reacoes_data: number;

  @Column({ length: 250 })
  reacoes_reacoes_adversas_ou_alergicas: string;

  @Column({ type: 'datetime' })
  reacoes_created: Date;

  @Column({ type: 'datetime' })
  reacoes_updated: Date;

  @Column()
  referencias_id: number;

  @Column()
  referencias_paciente_id: number;

  @Column({ length: 500 })
  referencias_nome: string;

  @Column({ type: 'date' })
  referencias_data_nascimento: Date;

  @Column({ length: 500 })
  referencias_vinculo: string;

  @Column({ length: 500 })
  referencias_endereco: string;

  @Column({ length: 50 })
  referencias_telefone: string;

  @Column({ length: 50 })
  referencias_celular: string;

  @Column({ type: 'number' })
  referencias_mora_com_voce: number;

  @Column({ type: 'date' })
  referencias_data_informacao: Date;

  @Column({ type: 'datetime' })
  referencias_created: Date;

  @Column({ type: 'datetime' })
  referencias_updated: Date;

  @Column()
  sarcfs_id: number;

  @Column()
  sarcfs_paciente_id: number;

  @Column({ length: 100 })
  sarcfs_p1: string;

  @Column({ length: 100 })
  sarcfs_p2: string;

  @Column({ length: 100 })
  sarcfs_p3: string;

  @Column({ length: 100 })
  sarcfs_p4: string;

  @Column({ length: 100 })
  sarcfs_p5: string;

  @Column({ type: 'datetime' })
  sarcfs_created: Date;

  @Column({ type: 'datetime' })
  sarcfs_updated: Date;

  @PrimaryGeneratedColumn()
  sppbs_id: number;

  @Column()
  sppbs_paciente_id: number;

  @Column({ length: 250 })
  sppbs_p1: string;

  @Column({ length: 250 })
  sppbs_p2: string;

  @Column({ length: 250 })
  sppbs_p3: string;

  @Column({ length: 250 })
  sppbs_p4: string;

  @Column({ length: 250 })
  sppbs_p5: string;

  @Column({ length: 250 })
  sppbs_p6: string;

  @Column({ length: 250 })
  sppbs_p7: string;

  @Column({ length: 250 })
  sppbs_p8: string;

  @Column({ length: 250 })
  sppbs_p9: string;

  @Column({ length: 250 })
  sppbs_p10: string;

  @Column({ length: 250 })
  sppbs_p11: string;

  @Column({ length: 250 })
  sppbs_p12: string;

  @Column({ length: 250 })
  sppbs_p13: string;

  @Column({ length: 250 })
  sppbs_p14: string;

  @Column({ type: 'datetime' })
  sppbs_created: Date;

  @Column({ type: 'datetime' })
  sppbs_updated: Date;

  @Column()
  vacinas_id: number;

  @Column()
  vacinas_paciente_id: number;

  @Column({ length: 250 })
  vacinas_nome: string;

  @Column({ type: 'date' })
  vacinas_data: Date;

  @Column({ length: 250 })
  vacinas_lote: string;

  @Column({ length: 250 })
  vacinas_ass: string;

  @Column({ length: 250 })
  vacinas_tipo: string;

  @Column({ length: 250 })
  vacinas_outra: string;

  @Column({ type: 'datetime' })
  vacinas_created: Date;

  @Column({ type: 'datetime' })
  vacinas_updated: Date;

  @Column()
  vulnerabilidades_id: number;

  @Column()
  vulnerabilidades_paciente_id: number;

  @Column()
  vulnerabilidades_ano: number;

  @Column({ length: 250 })
  vulnerabilidades_idade: string;

  @Column({ length: 250 })
  vulnerabilidades_autopercepcao: string;

  @Column({ length: 250 })
  vulnerabilidades_limitacao1: string;

  @Column({ length: 250 })
  vulnerabilidades_limitacao2: string;

  @Column({ length: 250 })
  vulnerabilidades_limitacao3: string;

  @Column({ length: 250 })
  vulnerabilidades_limitacao4: string;

  @Column({ length: 250 })
  vulnerabilidades_limitacao5: string;

  @Column({ length: 250 })
  vulnerabilidades_limitacao6: string;

  @Column({ type: 'number' })
  vulnerabilidades_incapacidades1: number;

  @Column({ type: 'number' })
  vulnerabilidades_incapacidades2: number;

  @Column({ type: 'number' })
  vulnerabilidades_incapacidades3: number;

  @Column({ type: 'number' })
  vulnerabilidades_incapacidades4: number;

  @Column({ type: 'number' })
  vulnerabilidades_incapacidades5: number;

  @Column()
  vulnerabilidades_pontuacao_total: number;

  @Column({ type: 'datetime' })
  vulnerabilidades_created: Date;

  @Column({ type: 'datetime' })
  vulnerabilidades_updated: Date;
}
