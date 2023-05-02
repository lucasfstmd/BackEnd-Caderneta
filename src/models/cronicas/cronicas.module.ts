import { Module } from '@nestjs/common';
import { CronicasService } from './cronicas.service';
import { CronicasController } from './cronicas.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { cronicasProviders } from './cronicas.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [CronicasController],
  providers: [...cronicasProviders, CronicasService],
})
export class CronicasModule {}
