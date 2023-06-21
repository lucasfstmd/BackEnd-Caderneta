import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';
@Controller('api/v1/database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  findAll() {
    return this.databaseService.findAll();
  }
}
