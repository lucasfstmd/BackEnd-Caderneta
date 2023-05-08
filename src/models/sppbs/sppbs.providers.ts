import { DataSource } from 'typeorm';
import { Sppb } from './entities/sppb.entity';

export const sppbsProviders = [
  {
    provide: 'SPPBS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Sppb),
    inject: ['DATA_SOURCE'],
  },
];
