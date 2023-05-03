import { DataSource } from 'typeorm';
import { Infancia } from './entities/infancia.entity';

export const infanciasProviders = [
  {
    provide: 'INFANCIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Infancia),
    inject: ['DATA_SOURCE'],
  },
];
