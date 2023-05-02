import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { pacientesProviders } from './pacientes.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [PacientesController],
  providers: [...pacientesProviders, PacientesService],
})
export class PacientesModule {}
