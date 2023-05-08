import { DataSource } from 'typeorm';
import { Queda } from './entities/queda.entity';

export const quedasProviders = [
  {
    provide: 'QUEDAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Queda),
    inject: ['DATA_SOURCE'],
  },
];
