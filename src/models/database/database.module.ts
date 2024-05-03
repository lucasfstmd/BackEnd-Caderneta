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
import { PressaoControlesService } from '../pressao_controles/pressao_controles.service';
import { pressao_controlesProviders } from '../pressao_controles/pressao_controles.providers';
import { GlicemiaControlesService } from '../glicemia_controles/glicemia_controles.service';
import { glicemia_controlesProviders } from '../glicemia_controles/glicemia_controles.providers';
import { BucalSaudesService } from '../bucal_saudes/bucal_saudes.service';
import { bucal_saudesProviders } from '../bucal_saudes/bucal_saudes.providers';
import { PclsService } from '../pcls/pcls.service';
import { pclsProviders } from '../pcls/pcls.providers';
import { PreensaoForcasService } from '../preensao_forcas/preensao_forcas.service';
import { preensao_forcasProviders } from '../preensao_forcas/preensao_forcas.providers';
import { SppbsService } from '../sppbs/sppbs.service';
import { sppbsProviders } from '../sppbs/sppbs.providers';
import { IvcfsService } from '../ivcfs/ivcfs.service';
import { ivcfsProviders } from '../ivcfs/ivcfs.providers';
import { BioimpedanciasService } from '../bioimpedancias/bioimpedancias.service';
import { bioimpedanciasProviders } from '../bioimpedancias/bioimpedancias.providers';
import { LaboratorialExamesService } from '../laboratorial_exames/laboratorial_exames.service';
import { laboratorial_examesProviders } from '../laboratorial_exames/laboratorial_exames.providers';
import { FragilidadesService } from '../fragilidades/fragilidades.service';
import { fragilidadesProviders } from '../fragilidades/fragilidades.providers';
import { FrrisquesService } from '../frrisques/frrisques.service';
import { frrisquesProviders } from '../frrisques/frrisques.providers';
import { InfanciasService } from '../infancias/infancias.service';
import { infanciasProviders } from '../infancias/infancias.providers';
import { SarcfsService } from '../sarcfs/sarcfs.service';
import { sarcfsProviders } from '../sarcfs/sarcfs.providers';

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
    PressaoControlesService,
    ...pressao_controlesProviders,
    GlicemiaControlesService,
    ...glicemia_controlesProviders,
    BucalSaudesService,
    ...bucal_saudesProviders,
    PclsService,
    ...pclsProviders,
    PreensaoForcasService,
    ...preensao_forcasProviders,
    SppbsService,
    ...sppbsProviders,
    IvcfsService,
    ...ivcfsProviders,
    BioimpedanciasService,
    ...bioimpedanciasProviders,
    LaboratorialExamesService,
    ...laboratorial_examesProviders,
    FragilidadesService,
    ...fragilidadesProviders,
    FrrisquesService,
    ...frrisquesProviders,
    InfanciasService,
    ...infanciasProviders,
    SarcfsService,
    ...sarcfsProviders,
  ],
})
export class DatabaseModule {}
