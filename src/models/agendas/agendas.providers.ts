import { DataSource } from 'typeorm';
import { Agenda } from './entities/agenda.entity';

export const agendasProviders = [
  {
    provide: 'AGENDA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Agenda),
    inject: ['DATA_SOURCE'],
  },
];
