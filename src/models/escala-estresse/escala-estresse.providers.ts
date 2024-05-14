import { DataSource } from 'typeorm'
import { EscalaEstresse } from './entities/escala-estresse.entity'

export const escalaEstresseProviders = [
    {
        provide: 'ESCALA_ESTRESSE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(EscalaEstresse),
        inject: ['DATA_SOURCE']
    }
]
