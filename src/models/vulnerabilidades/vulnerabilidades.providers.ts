import { DataSource } from 'typeorm';
import { Vulnerabilidade } from './entities/vulnerabilidade.entity';

export const vulnerabilidadesProviders = [
  {
    provide: 'VULNERABILIDADES_PROVIDERS',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Vulnerabilidade),
    inject: ['DATA_SOURCE'],
  },
];
