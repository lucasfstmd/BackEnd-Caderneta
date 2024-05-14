import { Module } from '@nestjs/common';
import { PsqiService } from './psqi.service';
import { PsqiController } from './psqi.controller';
import { DataBaseModule } from '../../database/dataBaseModule'
import { psqiProvider } from './psqi.provider'

@Module({
  imports: [DataBaseModule],
  controllers: [PsqiController],
  providers: [...psqiProvider, PsqiService]
})
export class PsqiModule {}
