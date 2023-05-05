import { DataSource } from 'typeorm';
import { Obito } from './entities/obito.entity';

export const obitosProviders = [
  {
    provide: 'OBITOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Obito),
    inject: ['DATA_SOURCE'],
  },
];
