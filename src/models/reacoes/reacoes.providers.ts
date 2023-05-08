import { DataSource } from 'typeorm';
import { Reacao } from './entities/reacoes.entity';

export const reacoesProviders = [
  {
    provide: 'REACOES_PROVIDERS',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Reacao),
    inject: ['DATA_SOURCE'],
  },
];
