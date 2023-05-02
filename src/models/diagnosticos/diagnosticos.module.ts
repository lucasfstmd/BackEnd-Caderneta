import { Module } from '@nestjs/common';
import { DiagnosticosService } from './diagnosticos.service';
import { DiagnosticosController } from './diagnosticos.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { diagnoisticosProviders } from './diagnoisticos.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [DiagnosticosController],
  providers: [...diagnoisticosProviders, DiagnosticosService],
})
export class DiagnosticosModule {}
