import { Module } from '@nestjs/common';
import { QuedasService } from './quedas.service';
import { QuedasController } from './quedas.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { quedasProviders } from './quedas.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [QuedasController],
  providers: [...quedasProviders, QuedasService],
})
export class QuedasModule {}
