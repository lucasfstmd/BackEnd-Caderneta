import { Module } from '@nestjs/common';
import { AvaliacoesService } from './avaliacoes.service';
import { AvaliacoesController } from './avaliacoes.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { avaliacoesProviders } from './avaliacoes.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [AvaliacoesController],
  providers: [...avaliacoesProviders, AvaliacoesService],
})
export class AvaliacoesModule {}
