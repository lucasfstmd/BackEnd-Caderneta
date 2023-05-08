import { Module } from '@nestjs/common';
import { PressaoControlesService } from './pressao_controles.service';
import { PressaoControlesController } from './pressao_controles.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { pressao_controlesProviders } from './pressao_controles.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [PressaoControlesController],
  providers: [...pressao_controlesProviders, PressaoControlesService],
})
export class PressaoControlesModule {}
