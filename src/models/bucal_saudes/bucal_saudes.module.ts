import { Module } from '@nestjs/common';
import { BucalSaudesService } from './bucal_saudes.service';
import { BucalSaudesController } from './bucal_saudes.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { bucal_saudesProviders } from './bucal_saudes.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [BucalSaudesController],
  providers: [...bucal_saudesProviders, BucalSaudesService],
})
export class BucalSaudesModule {}
