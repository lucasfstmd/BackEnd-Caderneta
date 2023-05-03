import { Module } from '@nestjs/common';
import { IvcfsService } from './ivcfs.service';
import { IvcfsController } from './ivcfs.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { ivcfsProviders } from './ivcfs.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [IvcfsController],
  providers: [...ivcfsProviders, IvcfsService],
})
export class IvcfsModule {}
