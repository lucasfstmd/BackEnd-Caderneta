import { DataSource } from 'typeorm';
import { PreensaoForca } from './entities/preensao_forca.entity';

export const preensao_forcasProviders = [
  {
    provide: 'PRESSAO_FORCAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PreensaoForca),
    inject: ['DATA_SOURCE'],
  },
];
