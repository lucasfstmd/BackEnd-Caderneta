import { DataSource } from 'typeorm';
import { Avaliacao } from './entities/avaliacao.entity';

export const avaliacoesProviders = [
  {
    provide: 'AVALIACOES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Avaliacao),
    inject: ['DATA_SOURCE'],
  },
];
