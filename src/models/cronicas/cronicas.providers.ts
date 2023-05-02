import { DataSource } from 'typeorm';
import { Cronica } from './entities/cronica.entity';

export const cronicasProviders = [
  {
    provide: 'CRONICAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cronica),
    inject: ['DATA_SOURCE'],
  },
];
