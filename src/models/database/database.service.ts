import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DataBaseView } from './entities/database.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject('DATA_BASE_REPOSITORY')
    private dataBaseRepository: Repository<DataBaseView>,
  ) {}
  findAll() {
    return this.dataBaseRepository.find();
  }
}
