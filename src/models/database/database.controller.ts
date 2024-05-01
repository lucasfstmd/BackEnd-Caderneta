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
    private readonly ambService: AmbientaisService,
    private readonly qService: QuedasService,
    private readonly cronicaService: CronicasService,
    private readonly iService: IntensidadesService,
    private readonly hService: HabitosService,
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

    const result = pt.map((patient) => {
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
        ...queda,
        ...cronicas,
        ...intensidade,
        ...habito,
      };
    });

    return result;
  }
}
