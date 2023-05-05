import { DataSource } from 'typeorm';
import { Peso } from './entities/peso.entity';

export const pesosProviders = [
  {
    provide: 'PESOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Peso),
    inject: ['DATA_SOURCE'],
  },
];
