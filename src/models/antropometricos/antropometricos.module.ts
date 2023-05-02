import { Module } from '@nestjs/common';
import { AntropometricosService } from './antropometricos.service';
import { AntropometricosController } from './antropometricos.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { antropometricosProviders } from './antropometricos.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [AntropometricosController],
  providers: [...antropometricosProviders, AntropometricosService],
})
export class AntropometricosModule {}
