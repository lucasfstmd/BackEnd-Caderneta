import { DataSource } from 'typeorm';
import { Sarcf } from './entities/sarcf.entity';

export const sarcfsProviders = [
  {
    provide: 'SARCFS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Sarcf),
    inject: ['DATA_SOURCE'],
  },
];
