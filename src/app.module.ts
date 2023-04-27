import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './models/usuarios/usuarios.module';
import { AuthModule } from './models/auth/auth.module';

@Module({
  controllers: [AppController],
  imports: [UsuariosModule, AuthModule],
  providers: [AppService],
})
export class AppModule {}
