import { Module } from '@nestjs/common';
import { IntensidadesService } from './intensidades.service';
import { IntensidadesController } from './intensidades.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { intensidadesProviders } from './intensidades.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [IntensidadesController],
  providers: [...intensidadesProviders, IntensidadesService],
})
export class IntensidadesModule {}
