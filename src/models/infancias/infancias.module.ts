import { Module } from '@nestjs/common';
import { InfanciasService } from './infancias.service';
import { InfanciasController } from './infancias.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { infanciasProviders } from './infancias.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [InfanciasController],
  providers: [...infanciasProviders, InfanciasService],
})
export class InfanciasModule {}
