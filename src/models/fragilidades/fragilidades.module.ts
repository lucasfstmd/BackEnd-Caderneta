import { Module } from '@nestjs/common';
import { FragilidadesService } from './fragilidades.service';
import { FragilidadesController } from './fragilidades.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { fragilidadesProviders } from './fragilidades.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [FragilidadesController],
  providers: [...fragilidadesProviders, FragilidadesService],
})
export class FragilidadesModule {}
