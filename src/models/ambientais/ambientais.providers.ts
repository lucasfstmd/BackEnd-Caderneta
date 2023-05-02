import { DataSource } from 'typeorm';
import { Ambientais } from './entities/ambientai.entity';

export const ambientaisProviders = [
  {
    provide: 'AMBIENTAIS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Ambientais),
    inject: ['DATA_SOURCE'],
  },
];
