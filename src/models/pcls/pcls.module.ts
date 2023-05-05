import { Module } from '@nestjs/common';
import { PclsService } from './pcls.service';
import { PclsController } from './pcls.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { pclsProviders } from './pcls.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [PclsController],
  providers: [...pclsProviders, PclsService],
})
export class PclsModule {}
