import { Module } from '@nestjs/common';
import { SppbsService } from './sppbs.service';
import { SppbsController } from './sppbs.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { sppbsProviders } from './sppbs.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [SppbsController],
  providers: [...sppbsProviders, SppbsService],
})
export class SppbsModule {}
