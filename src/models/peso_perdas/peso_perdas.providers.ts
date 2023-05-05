import { DataSource } from 'typeorm';
import { PesoPerda } from './entities/peso_perda.entity';

export const peso_perdasProviders = [
  {
    provide: 'PESO_PERDAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PesoPerda),
    inject: ['DATA_SOURCE'],
  },
];
