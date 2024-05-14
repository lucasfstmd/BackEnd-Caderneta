import { DataSource } from 'typeorm'
import { Psqi } from './entities/psqi.entity'

export const psqiProvider = [
    {
        provide: 'PSQI_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Psqi),
        inject: ['DATA_SOURCE']
    }
]
