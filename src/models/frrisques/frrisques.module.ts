import { Module } from '@nestjs/common';
import { FrrisquesService } from './frrisques.service';
import { FrrisquesController } from './frrisques.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { frrisquesProviders } from './frrisques.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [FrrisquesController],
  providers: [...frrisquesProviders, FrrisquesService],
})
export class FrrisquesModule {}
