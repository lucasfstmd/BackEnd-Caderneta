import { Module } from '@nestjs/common';
import { AtualizacoesService } from './atualizacoes.service';
import { AtualizacoesController } from './atualizacoes.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { atualizacoesProviders } from './atualizacoes.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [AtualizacoesController],
  providers: [...atualizacoesProviders, AtualizacoesService],
})
export class AtualizacoesModule {}
