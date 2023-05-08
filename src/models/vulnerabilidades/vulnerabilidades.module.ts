import { Module } from '@nestjs/common';
import { VulnerabilidadesService } from './vulnerabilidades.service';
import { VulnerabilidadesController } from './vulnerabilidades.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { vulnerabilidadesProviders } from './vulnerabilidades.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [VulnerabilidadesController],
  providers: [...vulnerabilidadesProviders, VulnerabilidadesService],
})
export class VulnerabilidadesModule {}
