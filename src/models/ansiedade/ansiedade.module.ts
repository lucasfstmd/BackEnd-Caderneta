import { Module } from '@nestjs/common';
import { AnsiedadeService } from './ansiedade.service';
import { AnsiedadeController } from './ansiedade.controller';
import { DataBaseModule } from '../../database/dataBaseModule'
import { ansiedadeProviders } from './ansiedade.providers'

@Module({
  imports: [DataBaseModule],
  controllers: [AnsiedadeController],
  providers: [...ansiedadeProviders, AnsiedadeService]
})
export class AnsiedadeModule {}
