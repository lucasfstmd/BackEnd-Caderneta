import { DataSource } from 'typeorm'
import { Ipaq } from './entities/ipaq.entity'

export const ipaqProviders = [
    {
       provide: 'IPAQ_REPOSITORY',
       useFactory: (dataSource: DataSource) => dataSource.getRepository(Ipaq),
       inject: ['DATA_SOURCE']
    }
]
