import { DataSource } from 'typeorm';
import { Ivcf } from './entities/ivcf.entity';

export const ivcfsProviders = [
  {
    provide: 'IVCFS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Ivcf),
    inject: ['DATA_SOURCE'],
  },
];
