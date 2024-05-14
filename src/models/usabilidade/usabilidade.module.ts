import { Module } from '@nestjs/common';
import { UsabilidadeService } from './usabilidade.service';
import { UsabilidadeController } from './usabilidade.controller';
import { DataBaseModule } from '../../database/dataBaseModule'
import { usabilidadeProviders } from './usabilidade.providers'

@Module({
  imports: [DataBaseModule],
  controllers: [UsabilidadeController],
  providers: [...usabilidadeProviders, UsabilidadeService]
})
export class UsabilidadeModule {}
