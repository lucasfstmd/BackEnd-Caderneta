import { Module } from '@nestjs/common';
import { AvaliacoesService } from './avaliacoes.service';
import { AvaliacoesController } from './avaliacoes.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { avalicoesProviders } from './avalicoes.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [AvaliacoesController],
  providers: [...avalicoesProviders, AvaliacoesService],
})
export class AvaliacoesModule {}
