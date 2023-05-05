import { Module } from '@nestjs/common';
import { PesoPerdasService } from './peso_perdas.service';
import { PesoPerdasController } from './peso_perdas.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { peso_perdasProviders } from './peso_perdas.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [PesoPerdasController],
  providers: [...peso_perdasProviders, PesoPerdasService],
})
export class PesoPerdasModule {}
