import { DataSource } from 'typeorm';
import { Antropometricos } from './entities/antropometrico.entity';

export const antropometricosProviders = [
  {
    provide: 'ANTROPOMETRICAS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Antropometricos),
    inject: ['DATA_SOURCE'],
  },
];
