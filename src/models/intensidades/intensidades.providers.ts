import { DataSource } from 'typeorm';
import { Intensidade } from './entities/intensidade.entity';

export const intensidadesProviders = [
  {
    provide: 'INTENSIDADES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Intensidade),
    inject: ['DATA_SOURCE'],
  },
];
