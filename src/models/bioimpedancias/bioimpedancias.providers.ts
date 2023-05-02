import { DataSource } from 'typeorm';
import { Bioimpedancia } from './entities/bioimpedancia.entity';

export const bioimpedanciasProviders = [
  {
    provide: 'BIOIMPEDANCIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Bioimpedancia),
    inject: ['DATA_SOURCE'],
  },
];
