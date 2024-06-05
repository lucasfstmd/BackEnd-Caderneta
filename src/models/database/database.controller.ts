import { Controller, Get } from '@nestjs/common';
import { PacientesService } from '../pacientes/pacientes.service';
import { FamiliaresService } from '../familiares/familiares.service';
import { ObitosService } from '../obitos/obitos.service';
import { ReacoesService } from '../reacoes/reacoes.service';
import { PolifarmaciasService } from '../polifarmacias/polifarmacias.service';
import { DiagnosticosService } from '../diagnosticos/diagnosticos.service';
import { AntropometricosService } from '../antropometricos/antropometricos.service';
import { CirurgiasService } from '../cirurgias/cirurgias.service';
import { AvaliacoesService } from '../avaliacoes/avaliacoes.service';
import { PesosService } from '../pesos/pesos.service';
import { PesoPerdasService } from '../peso_perdas/peso_perdas.service';
import { VulnerabilidadesService } from '../vulnerabilidades/vulnerabilidades.service';
import { AmbientaisService } from '../ambientais/ambientais.service';
import { QuedasService } from '../quedas/quedas.service';
import { CronicasService } from '../cronicas/cronicas.service';
import { IntensidadesService } from '../intensidades/intensidades.service';
import { HabitosService } from '../habitos/habitos.service';
import { PressaoControlesService } from '../pressao_controles/pressao_controles.service';
import { GlicemiaControlesService } from '../glicemia_controles/glicemia_controles.service';
import { BucalSaudesService } from '../bucal_saudes/bucal_saudes.service';
import { PclsService } from '../pcls/pcls.service';
import { PreensaoForcasService } from '../preensao_forcas/preensao_forcas.service';
import { SppbsService } from '../sppbs/sppbs.service';
import { IvcfsService } from '../ivcfs/ivcfs.service';
import { BioimpedanciasService } from '../bioimpedancias/bioimpedancias.service';
import { LaboratorialExamesService } from '../laboratorial_exames/laboratorial_exames.service';
import { FragilidadesService } from '../fragilidades/fragilidades.service';
import { FrrisquesService } from '../frrisques/frrisques.service';
import { InfanciasService } from '../infancias/infancias.service';
import { SarcfsService } from '../sarcfs/sarcfs.service';
import { ComplementaresService } from '../complementares/complementares.service'

@Controller('api/v1/database')
export class DatabaseController {
  constructor(
    private readonly pService: PacientesService,
    private readonly fService: FamiliaresService,
    private readonly oService: ObitosService,
    private readonly rService: ReacoesService,
    private readonly poliService: PolifarmaciasService,
    private readonly dService: DiagnosticosService,
    private readonly aService: AntropometricosService,
    private readonly cService: CirurgiasService,
    private readonly avaService: AvaliacoesService,
    private readonly pesoService: PesosService,
    private readonly pesoPService: PesoPerdasService,
    private readonly vService: VulnerabilidadesService,
    private readonly complementaresService: ComplementaresService,
    private readonly ambService: AmbientaisService,
    private readonly qService: QuedasService,
    private readonly cronicaService: CronicasService,
    private readonly iService: IntensidadesService,
    private readonly hService: HabitosService,
    private readonly pcService: PressaoControlesService,
    private readonly gcService: GlicemiaControlesService,
    private readonly bsService: BucalSaudesService,
    private readonly pclsService: PclsService,
    private readonly pfService: PreensaoForcasService,
    private readonly sbbpService: SppbsService,
    private readonly ivcfService: IvcfsService,
    private readonly bioService: BioimpedanciasService,
    private readonly leService: LaboratorialExamesService,
    private readonly frService: FragilidadesService,
    private readonly frrService: FrrisquesService,
    private readonly infService: InfanciasService,
    private readonly sarcfService: SarcfsService,
  ) {}

  @Get()
  async getDataBase() {
    const pt = await this.pService.findAll();
    const f = await this.fService.findAll();
    const o = await this.oService.findAll();
    const r = await this.rService.findAll();
    const poli = await this.poliService.findAll();
    const d = await this.dService.findAll();
    const a = await this.aService.findAll();
    const c = await this.cService.findAll();
    const ava = await this.avaService.findAll();
    const peso = await this.pesoService.findAll();
    const pesoP = await this.pesoPService.findAll();
    const v = await this.vService.findAll();
    const amb = await this.ambService.findAll();
    const q = await this.qService.findAll();
    const cronica = await this.cronicaService.findAll();
    const i = await this.iService.findAll();
    const h = await this.hService.findAll();
    const pc = await this.pcService.findAll();
    const gc = await this.gcService.findAll();
    const bs = await this.bsService.findAll();
    const pcls = await this.pclsService.findAll();
    const pf = await this.pfService.findAll();
    const sbbps = await this.sbbpService.findAll();
    const ivcfs = await this.ivcfService.findAll();
    const bio = await this.bioService.findAll();
    const le = await this.leService.findAll();
    const fr = await this.frService.findAll();
    const frr = await this.frrService.findAll();
    const inf = await this.infService.findAll();
    const sarcfs = await this.sarcfService.findAll();
    const complement = await this.complementaresService.findAll();

    const build = (array, field, patient_id) => {
      return array
        .filter((item) => item.paciente_id === patient_id)
        .map((item) => {
          return {
            ...item,
          };
        })
        .reduce((accumulated, current, index) => {
          const obj = {};
          Object.keys(current).forEach((key) => {
            if (key !== 'paciente_id') {
              obj[`${field}_${index + 1}_${key}`] = current[key];
            }
          });
          return {
            ...accumulated,
            ...obj,
          };
        }, {});
    };

    return pt.map((patient) => {
      const familiar = build(f, 'familiar', patient.id);
      const obito = build(o, 'exame', patient.id);
      const medicamento = build(ava, 'medicamentos', patient.id);
      const polifarmacia = build(poli, 'polifarmacias', patient.id);
      const diagnostico = build(d, 'diagnosticos', patient.id);
      const antropometrico = build(a, 'antropometricos', patient.id);
      const cirurgia = build(c, 'cirurgias', patient.id);
      const reacao = build(r, 'reacoes', patient.id);
      const pesos = build(peso, 'pesos', patient.id);
      const pesoPerda = build(pesoP, 'peso-perdas', patient.id);
      const vulnerabilidade = build(v, 'vulnerabilidades', patient.id);
      const ambiental = build(amb, 'ambientais', patient.id);
      const queda = build(q, 'quedas', patient.id);
      const cronicas = build(cronica, 'cronicas', patient.id);
      const intensidade = build(i, 'intensidades', patient.id);
      const habito = build(h, 'habitos', patient.id);
      const controlesPressao = build(pc, 'controlePressao', patient.id);
      const glicemias = build(gc, 'glicemia', patient.id);
      const saudeBuca = build(bs, 'saudeBucal', patient.id);
      const pcl = build(pcls, 'pcls', patient.id);
      const forcasPreensao = build(pf, 'forcaPreensao', patient.id);
      const sppb = build(sbbps, 'sppbs', patient.id);
      const ivcf = build(ivcfs, 'ivcfs', patient.id);
      const bioimpedancia = build(bio, 'bioimpedancias', patient.id);
      const exameLabo = build(le, 'exames-laboratoriais', patient.id);
      const fragilidade = build(fr, 'fragilidades', patient.id);
      const frrisque = build(frr, 'frrisques', patient.id);
      const infancia = build(inf, 'adversidades', patient.id);
      const sarcf = build(sarcfs, 'sarcfs', patient.id);
      const complementares = build(complement, 'complementares', patient.id);

      return {
        ...patient,
        ...familiar,
        ...obito,
        ...medicamento,
        ...polifarmacia,
        ...diagnostico,
        ...antropometrico,
        ...cirurgia,
        ...reacao,
        ...pesos,
        ...pesoPerda,
        ...vulnerabilidade,
        ...ambiental,
        ...complementares,
        ...queda,
        ...cronicas,
        ...intensidade,
        ...habito,
        ...controlesPressao,
        ...glicemias,
        ...saudeBuca,
        ...pcl,
        ...forcasPreensao,
        ...sppb,
        ...ivcf,
        ...bioimpedancia,
        ...exameLabo,
        ...fragilidade,
        ...frrisque,
        ...infancia,
        ...sarcf,
      };
    });
  }
}
