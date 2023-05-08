import { Module } from '@nestjs/common';
import { ReacoesService } from './reacoes.service';
import { ReacoesController } from './reacoes.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { reacoesProviders } from './reacoes.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [ReacoesController],
  providers: [...reacoesProviders, ReacoesService],
})
export class ReacoesModule {}
