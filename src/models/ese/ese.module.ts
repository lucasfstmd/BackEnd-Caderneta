import { Module } from '@nestjs/common';
import { EseService } from './ese.service';
import { EseController } from './ese.controller';
import { DataBaseModule } from '../../database/dataBaseModule'
import { eseProviders } from './ese.providers'

@Module({
  imports: [DataBaseModule],
  controllers: [EseController],
  providers: [...eseProviders, EseService]
})
export class EseModule {}
