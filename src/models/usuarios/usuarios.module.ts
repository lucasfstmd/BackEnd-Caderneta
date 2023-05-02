import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { usuariosProviders } from './usuarios.providers';
import { DataBaseModule } from '../../database/dataBaseModule';

@Module({
  imports: [DataBaseModule],
  controllers: [UsuariosController],
  providers: [...usuariosProviders, UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
/*
{
  "usuario": "lucas",
  "senha": "lucas123"
}
*/
