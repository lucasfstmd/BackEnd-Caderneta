import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './models/usuarios/usuarios.module';
import { AmbientaisModule } from './models/ambientais/ambientais.module';
import { AntropometricosModule } from './models/antropometricos/antropometricos.module';
import { AuthModule } from './models/auth/auth.module';
import { PacientesModule } from './models/pacientes/pacientes.module';
import { AgendasModule } from './models/agendas/agendas.module';
import { AtualizacoesModule } from './models/atualizacoes/atualizacoes.module';
import { AvaliacoesModule } from './models/avaliacoes/avaliacoes.module';
import { BioimpedanciasModule } from './models/bioimpedancias/bioimpedancias.module';
import { BucalSaudesModule } from './models/bucal_saudes/bucal_saudes.module';
import { CirurgiasModule } from './models/cirurgias/cirurgias.module';
import { ComplementaresModule } from './models/complementares/complementares.module';
import { CronicasModule } from './models/cronicas/cronicas.module';
import { DiagnosticosModule } from './models/diagnosticos/diagnosticos.module';
import { FamiliaresModule } from './models/familiares/familiares.module';
import { FragilidadesModule } from './models/fragilidades/fragilidades.module';
import { FrrisquesModule } from './models/frrisques/frrisques.module';
import { GlicemiaControlesModule } from './models/glicemia_controles/glicemia_controles.module';
import { HabitosModule } from './models/habitos/habitos.module';
import { InfanciasModule } from './models/infancias/infancias.module';
import { IntensidadesModule } from './models/intensidades/intensidades.module';
import { IvcfsModule } from './models/ivcfs/ivcfs.module';
import { LaboratorialExamesModule } from './models/laboratorial_exames/laboratorial_exames.module';
import { ObitosModule } from './models/obitos/obitos.module';
import { PclsModule } from './models/pcls/pcls.module';
import { PesoPerdasModule } from './models/peso_perdas/peso_perdas.module';
import { PesosModule } from './models/pesos/pesos.module';
import { PolifarmaciasModule } from './models/polifarmacias/polifarmacias.module';
import { PreensaoForcasModule } from './models/preensao_forcas/preensao_forcas.module';
import { PressaoControlesModule } from './models/pressao_controles/pressao_controles.module';
import { QuedasModule } from './models/quedas/quedas.module';
import { ReacoesModule } from './models/reacoes/reacoes.module';
import { ReferenciasModule } from './models/referencias/referencias.module';
import { SarcfsModule } from './models/sarcfs/sarcfs.module';
import { SppbsModule } from './models/sppbs/sppbs.module';
import { VacinasModule } from './models/vacinas/vacinas.module';
import { VulnerabilidadesModule } from './models/vulnerabilidades/vulnerabilidades.module';
import { UbsModule } from './models/ubs/ubs.module';

@Module({
  controllers: [AppController],
  imports: [
    UsuariosModule,
    AuthModule,
    PacientesModule,
    AgendasModule,
    AmbientaisModule,
    AntropometricosModule,
    AtualizacoesModule,
    AvaliacoesModule,
    BioimpedanciasModule,
    BucalSaudesModule,
    CirurgiasModule,
    ComplementaresModule,
    CronicasModule,
    DiagnosticosModule,
    FamiliaresModule,
    FragilidadesModule,
    FrrisquesModule,
    GlicemiaControlesModule,
    HabitosModule,
    InfanciasModule,
    IntensidadesModule,
    IvcfsModule,
    LaboratorialExamesModule,
    ObitosModule,
    PclsModule,
    PesoPerdasModule,
    PesosModule,
    PolifarmaciasModule,
    PreensaoForcasModule,
    PressaoControlesModule,
    QuedasModule,
    ReacoesModule,
    ReferenciasModule,
    SarcfsModule,
    SppbsModule,
    VacinasModule,
    VulnerabilidadesModule,
    UbsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
