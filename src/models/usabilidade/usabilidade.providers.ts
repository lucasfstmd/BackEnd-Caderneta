import { DataSource } from 'typeorm'
import { Usabilidade } from './entities/usabilidade.entity'

export const usabilidadeProviders = [
    {
        provide: 'USABILIDADE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Usabilidade),
        inject: ['DATA_SOURCE']
    }
]
