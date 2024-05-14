import { Module } from '@nestjs/common';
import { AutorrelatoService } from './autorrelato.service';
import { AutorrelatoController } from './autorrelato.controller';
import { DataBaseModule } from '../../database/dataBaseModule'
import { autorrelatoProviders } from './autorrelato.providers'

@Module({
  imports: [DataBaseModule],
  controllers: [AutorrelatoController],
  providers: [...autorrelatoProviders, AutorrelatoService]
})
export class AutorrelatoModule {}
