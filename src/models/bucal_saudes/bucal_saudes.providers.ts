import { DataSource } from 'typeorm';
import { BucalSaude } from './entities/bucal_saude.entity';

export const bucal_saudesProviders = [
  {
    provide: 'BUCAL_SAUDES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(BucalSaude),
    inject: ['DATA_SOURCE'],
  },
];
