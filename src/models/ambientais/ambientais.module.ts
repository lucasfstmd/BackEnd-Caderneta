import { Module } from '@nestjs/common';
import { AmbientaisService } from './ambientais.service';
import { AmbientaisController } from './ambientais.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { ambientaisProviders } from './ambientais.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [AmbientaisController],
  providers: [...ambientaisProviders, AmbientaisService],
})
export class AmbientaisModule {}
