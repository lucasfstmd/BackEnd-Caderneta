import { Module } from '@nestjs/common';
import { PolifarmaciasService } from './polifarmacias.service';
import { PolifarmaciasController } from './polifarmacias.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { polifarmaciasProviders } from './polifarmacias.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [PolifarmaciasController],
  providers: [...polifarmaciasProviders, PolifarmaciasService],
})
export class PolifarmaciasModule {}
