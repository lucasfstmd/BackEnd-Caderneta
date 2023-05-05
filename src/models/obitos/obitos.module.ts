import { Module } from '@nestjs/common';
import { ObitosService } from './obitos.service';
import { ObitosController } from './obitos.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { obitosProviders } from './obitos.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [ObitosController],
  providers: [...obitosProviders, ObitosService],
})
export class ObitosModule {}
