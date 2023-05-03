import { Module } from '@nestjs/common';
import { GlicemiaControlesService } from './glicemia_controles.service';
import { GlicemiaControlesController } from './glicemia_controles.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { glicemia_controlesProviders } from './glicemia_controles.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [GlicemiaControlesController],
  providers: [...glicemia_controlesProviders, GlicemiaControlesService],
})
export class GlicemiaControlesModule {}
