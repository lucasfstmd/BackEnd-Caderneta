import { DataSource } from 'typeorm';
import { Cirurgia } from './entities/cirurgia.entity';

export const cirurgiasProviders = [
  {
    provide: 'CIRURGIAS_REPOSITORY',
    useFactory: (dataSoruce: DataSource) => dataSoruce.getRepository(Cirurgia),
    inject: ['DATA_SOURCE'],
  },
];
