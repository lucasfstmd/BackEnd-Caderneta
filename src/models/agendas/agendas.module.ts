import { Module } from '@nestjs/common';
import { AgendasService } from './agendas.service';
import { AgendasController } from './agendas.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { agendasProviders } from './agendas.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [AgendasController],
  providers: [...agendasProviders, AgendasService],
})
export class AgendasModule {}
