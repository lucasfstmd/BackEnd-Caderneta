import { DataSource } from 'typeorm';
import { Diagnostico } from './entities/diagnostico.entity';

export const diagnosticosProviders = [
  {
    provide: 'DIAGNOSTICOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Diagnostico),
    inject: ['DATA_SOURCE'],
  },
];
