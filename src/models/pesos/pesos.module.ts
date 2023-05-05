import { Module } from '@nestjs/common';
import { PesosService } from './pesos.service';
import { PesosController } from './pesos.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { pesosProviders } from './pesos.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [PesosController],
  providers: [...pesosProviders, PesosService],
})
export class PesosModule {}
