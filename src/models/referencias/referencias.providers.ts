import { DataSource } from 'typeorm';
import { Referencia } from './entities/referencia.entity';

export const referenciasProviders = [
  {
    provide: 'REFERENCIAS_REPOSITORY',
    useFactory: (dataSorce: DataSource) => dataSorce.getRepository(Referencia),
    inject: ['DATA_SOURCE'],
  },
];
