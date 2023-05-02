import { Module } from '@nestjs/common';
import { BioimpedanciasService } from './bioimpedancias.service';
import { BioimpedanciasController } from './bioimpedancias.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { bioimpedanciasProviders } from './bioimpedancias.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [BioimpedanciasController],
  providers: [...bioimpedanciasProviders, BioimpedanciasService],
})
export class BioimpedanciasModule {}
