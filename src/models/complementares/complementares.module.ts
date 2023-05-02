import { Module } from '@nestjs/common';
import { ComplementaresService } from './complementares.service';
import { ComplementaresController } from './complementares.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { complementaresProviders } from './complementares.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [ComplementaresController],
  providers: [...complementaresProviders, ComplementaresService],
})
export class ComplementaresModule {}
