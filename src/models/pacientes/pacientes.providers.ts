import { DataSource } from 'typeorm';
import { Paciente } from './entities/paciente.entity';

export const pacientesProviders = [
  {
    provide: 'PACIENTE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Paciente),
    inject: ['DATA_SOURCE'],
  },
];
