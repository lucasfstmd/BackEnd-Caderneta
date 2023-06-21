import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { DataBaseModule } from '../../database/dataBaseModule';
import { databaseProviders } from './database.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [DatabaseController],
  providers: [...databaseProviders, DatabaseService],
})
export class DatabaseModule {}
