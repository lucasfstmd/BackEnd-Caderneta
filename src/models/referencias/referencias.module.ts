import { Module } from '@nestjs/common';
import { ReferenciasService } from './referencias.service';
import { ReferenciasController } from './referencias.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { referenciasProviders } from './referencias.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [ReferenciasController],
  providers: [...referenciasProviders, ReferenciasService],
})
export class ReferenciasModule {}
