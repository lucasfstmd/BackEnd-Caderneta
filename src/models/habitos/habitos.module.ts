import { Module } from '@nestjs/common';
import { HabitosService } from './habitos.service';
import { HabitosController } from './habitos.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { habitosProviders } from './habitos.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [HabitosController],
  providers: [...habitosProviders, HabitosService],
})
export class HabitosModule {}
