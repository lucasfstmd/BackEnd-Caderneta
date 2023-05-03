import { DataSource } from 'typeorm';
import { Frrisque } from './entities/frrisque.entity';

export const frrisquesProviders = [
  {
    provide: 'FRRISQUES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Frrisque),
    inject: ['DATA_SOURCE'],
  },
];
