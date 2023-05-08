import { Module } from '@nestjs/common';
import { PreensaoForcasService } from './preensao_forcas.service';
import { PreensaoForcasController } from './preensao_forcas.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { preensao_forcasProviders } from './preensao_forcas.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [PreensaoForcasController],
  providers: [...preensao_forcasProviders, PreensaoForcasService],
})
export class PreensaoForcasModule {}
