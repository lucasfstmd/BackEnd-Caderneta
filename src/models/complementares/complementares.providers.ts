import { DataSource } from 'typeorm';
import { Complementar } from './entities/complementar.entity';

export const complementaresProviders = [
  {
    provide: 'COMPLEMENTARES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Complementar),
    inject: ['DATA_SOURCE'],
  },
];
