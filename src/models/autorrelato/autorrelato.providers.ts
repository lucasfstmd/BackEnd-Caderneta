import { DataSource } from 'typeorm'
import { Autorrelato } from './entities/autorrelato.entity'

export const autorrelatoProviders = [
    {
        provide: 'AUTORRELATO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Autorrelato),
        inject: ['DATA_SOURCE']
    }
]
