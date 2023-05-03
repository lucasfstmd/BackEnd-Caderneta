import { DataSource } from 'typeorm';
import { LaboratorialExames } from './entities/laboratorial_exame.entity';

export const laboratorial_examesProviders = [
  {
    provide: 'LABORATORIAL_EXAMES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(LaboratorialExames),
    inject: ['DATA_SOURCE'],
  },
];
