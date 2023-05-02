import { Module } from '@nestjs/common';
import { FamiliaresService } from './familiares.service';
import { FamiliaresController } from './familiares.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { familiaresProviders } from './familiares.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [FamiliaresController],
  providers: [...familiaresProviders, FamiliaresService],
})
export class FamiliaresModule {}
