import { DataSource } from 'typeorm';
import { Pcls } from './entities/pcls.entity';

export const pclsProviders = [
  {
    provide: 'PCLS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pcls),
    inject: ['DATA_SOURCE'],
  },
];
