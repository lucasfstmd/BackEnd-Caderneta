import { Module } from '@nestjs/common';
import { CirurgiasService } from './cirurgias.service';
import { CirurgiasController } from './cirurgias.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { cirurgiasProviders } from './cirurgias.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [CirurgiasController],
  providers: [...cirurgiasProviders, CirurgiasService],
})
export class CirurgiasModule {}
