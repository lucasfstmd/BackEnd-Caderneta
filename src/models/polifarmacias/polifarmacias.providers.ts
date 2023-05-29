import { DataSource } from 'typeorm';
import { Polifarmacia } from './entities/polifarmacia.entity';

export const polifarmaciasProviders = [
  {
    provide: 'POLIFARMACIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Polifarmacia),
    inject: ['DATA_SOURCE'],
  },
];
