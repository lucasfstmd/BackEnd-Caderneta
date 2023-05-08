import { DataSource } from 'typeorm';
import { Vacina } from './entities/vacina.entity';

export const vacinasProviders = [
  {
    provide: 'VACINAS_REPOSITORY',
    useFactory: (dataSorce: DataSource) => dataSorce.getRepository(Vacina),
    inject: ['DATA_SOURCE'],
  },
];
