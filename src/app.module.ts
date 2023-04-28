import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './models/usuarios/usuarios.module';
import { AuthModule } from './models/auth/auth.module';
import { PacientesModule } from './models/pacientes/pacientes.module';
import { AgendasModule } from './models/agendas/agendas.module';

@Module({
  controllers: [AppController],
  imports: [UsuariosModule, AuthModule, PacientesModule, AgendasModule],
  providers: [AppService],
})
export class AppModule {}
