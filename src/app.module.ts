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
  ],
  providers: [AppService],
})
export class AppModule {}
