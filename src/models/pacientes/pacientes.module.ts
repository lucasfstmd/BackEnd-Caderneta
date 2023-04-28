import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { DatabaseModule } from '../../database/database.module';
import { pacientesProviders } from './pacientes.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PacientesController],
  providers: [...pacientesProviders, PacientesService],
})
export class PacientesModule {}
