import { DataSource } from 'typeorm';
import { DataBaseView } from './entities/database.entity';

export const databaseProviders = [
  {
    provide: 'DATA_BASE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DataBaseView),
    inject: ['DATA_SOURCE'],
  },
];
