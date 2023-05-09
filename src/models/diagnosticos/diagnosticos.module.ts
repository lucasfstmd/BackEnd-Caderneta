import { Module } from '@nestjs/common';
import { DiagnosticosService } from './diagnosticos.service';
import { DiagnosticosController } from './diagnosticos.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { diagnosticosProviders } from './diagnosticos.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [DiagnosticosController],
  providers: [...diagnosticosProviders, DiagnosticosService],
})
export class DiagnosticosModule {}
