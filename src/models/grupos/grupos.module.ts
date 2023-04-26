import { Module } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { GruposController } from './grupos.controller';
import { DatabaseModule } from '../../database/database.module';
import { gruposProviders } from './grupos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GruposController],
  providers: [...gruposProviders, GruposService],
})
export class GruposModule {}
