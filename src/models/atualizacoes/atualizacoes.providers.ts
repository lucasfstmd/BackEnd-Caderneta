import { DataSource } from 'typeorm';
import { Atualizacoes } from './entities/atualizacoes.entity';

export const atualizacoesProviders = [
  {
    provide: 'ATUALIZACOES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Atualizacoes),
    inject: ['DATA_SOURCE'],
  },
];
