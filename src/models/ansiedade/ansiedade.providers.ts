import { DataSource } from 'typeorm'
import { Ansiedade } from './entities/ansiedade.entity'

export const ansiedadeProviders = [
    {
        provide: 'ANSIEDADE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Ansiedade),
        inject: ['DATA_SOURCE']
    }
]
