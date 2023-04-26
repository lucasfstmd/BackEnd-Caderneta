import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './models/usuarios/usuarios.module';
import { GruposModule } from './models/grupos/grupos.module';
import { PacientesModule } from './models/pacientes/pacientes.module';

@Module({
  imports: [UsuariosModule, GruposModule, PacientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
