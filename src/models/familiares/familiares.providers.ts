import { DataSource } from 'typeorm';
import { Familiar } from './entities/familiar.entity';

export const familiaresProviders = [
  {
    provide: 'FAMILIARES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Familiar),
    inject: ['DATA_SOURCE'],
  },
];
