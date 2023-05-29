import { DataSource } from 'typeorm';
import { PressaoControle } from './entities/pressao_controle.entity';

export const pressao_controlesProviders = [
  {
    provide: 'PRESSAO_CONTROLES_REPOSITORY',
    useFactory: (dataSorce: DataSource) =>
      dataSorce.getRepository(PressaoControle),
    inject: ['DATA_SOURCE'],
  },
];
