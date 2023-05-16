import { Module } from '@nestjs/common';
import { UbsService } from './ubs.service';
import { UbsController } from './ubs.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { ubsProviders } from './ubs.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [UbsController],
  providers: [...ubsProviders, UbsService],
})
export class UbsModule {}
