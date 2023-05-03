import { DataSource } from 'typeorm';
import { Fragilidade } from './entities/fragilidade.entity';

export const fragilidadesProviders = [
  {
    provide: 'FRAGILIDADES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Fragilidade),
    inject: ['DATA_SOURCE'],
  },
];
