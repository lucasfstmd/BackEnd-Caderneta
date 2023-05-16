import { DataSource } from 'typeorm';
import { Ubs } from './entities/ubs.entity';

export const ubsProviders = [
  {
    provide: 'UBS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Ubs),
    inject: ['DATA_SOURCE'],
  },
];
