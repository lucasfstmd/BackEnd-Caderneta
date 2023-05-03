import { Module } from '@nestjs/common';
import { LaboratorialExamesService } from './laboratorial_exames.service';
import { LaboratorialExamesController } from './laboratorial_exames.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { laboratorial_examesProviders } from './laboratorial_exames.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [LaboratorialExamesController],
  providers: [...laboratorial_examesProviders, LaboratorialExamesService],
})
export class LaboratorialExamesModule {}
