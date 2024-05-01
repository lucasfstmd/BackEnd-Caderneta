import { Module } from '@nestjs/common';
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
import { DatabaseController } from './database.controller';
import { pacientesProviders } from '../pacientes/pacientes.providers';
import { DataBaseModule } from '../../database/dataBaseModule';
import { familiaresProviders } from '../familiares/familiares.providers';
import { obitosProviders } from '../obitos/obitos.providers';
import { reacoesProviders } from '../reacoes/reacoes.providers';
import { polifarmaciasProviders } from '../polifarmacias/polifarmacias.providers';
import { diagnosticosProviders } from '../diagnosticos/diagnosticos.providers';
import { antropometricosProviders } from '../antropometricos/antropometricos.providers';
import { cirurgiasProviders } from '../cirurgias/cirurgias.providers';
import { avaliacoesProviders } from '../avaliacoes/avaliacoes.providers';
import { pesosProviders } from '../pesos/pesos.providers';
import { peso_perdasProviders } from '../peso_perdas/peso_perdas.providers';
import { vulnerabilidadesProviders } from '../vulnerabilidades/vulnerabilidades.providers';
import { ambientaisProviders } from '../ambientais/ambientais.providers';
import { quedasProviders } from '../quedas/quedas.providers';
import { cronicasProviders } from '../cronicas/cronicas.providers';
import { intensidadesProviders } from '../intensidades/intensidades.providers';
import { habitosProviders } from '../habitos/habitos.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [DatabaseController],
  providers: [
    PacientesService,
    ...pacientesProviders,
    FamiliaresService,
    ...familiaresProviders,
    ObitosService,
    ...obitosProviders,
    ReacoesService,
    ...reacoesProviders,
    PolifarmaciasService,
    ...polifarmaciasProviders,
    DiagnosticosService,
    ...diagnosticosProviders,
    AntropometricosService,
    ...antropometricosProviders,
    CirurgiasService,
    ...cirurgiasProviders,
    AvaliacoesService,
    ...avaliacoesProviders,
    PesosService,
    ...pesosProviders,
    PesoPerdasService,
    ...peso_perdasProviders,
    VulnerabilidadesService,
    ...vulnerabilidadesProviders,
    AmbientaisService,
    ...ambientaisProviders,
    QuedasService,
    ...quedasProviders,
    CronicasService,
    ...cronicasProviders,
    IntensidadesService,
    ...intensidadesProviders,
    HabitosService,
    ...habitosProviders,
  ],
})
export class DatabaseModule {}
