import { DataSource } from 'typeorm'
import { Ese } from './entities/ese.entity'

export const eseProviders = [
    {
        provide: 'ESE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Ese),
        inject: ['DATA_SOURCE']
    }
]
