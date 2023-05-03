import { DataSource } from 'typeorm';
import { GlicemiaControle } from './entities/glicemia_controle.entity';

export const glicemia_controlesProviders = [
  {
    provide: 'GLICEMIA_CONTROLES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GlicemiaControle),
    inject: ['DATA_SOURCE'],
  },
];
