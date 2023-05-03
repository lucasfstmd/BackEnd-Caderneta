import { DataSource } from 'typeorm';
import { Habito } from './entities/habito.entity';

export const habitosProviders = [
  {
    provide: 'HABITOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Habito),
    inject: ['DATA_SOURCE'],
  },
];
