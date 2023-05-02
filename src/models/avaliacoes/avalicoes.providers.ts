import { DataSource } from 'typeorm';
import { Avaliacao } from './entities/avaliacao.entity';

export const avalicoesProviders = [
  {
    provide: 'AVALIACOES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Avaliacao),
    inject: ['DATA_SOURCE'],
  },
];
