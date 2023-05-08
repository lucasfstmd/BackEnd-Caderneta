import { Module } from '@nestjs/common';
import { SarcfsService } from './sarcfs.service';
import { SarcfsController } from './sarcfs.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { sarcfsProviders } from './sarcfs.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [SarcfsController],
  providers: [...sarcfsProviders, SarcfsService],
})
export class SarcfsModule {}
