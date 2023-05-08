import { Module } from '@nestjs/common';
import { VacinasService } from './vacinas.service';
import { VacinasController } from './vacinas.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { vacinasProviders } from './vacinas.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [VacinasController],
  providers: [...vacinasProviders, VacinasService],
})
export class VacinasModule {}
