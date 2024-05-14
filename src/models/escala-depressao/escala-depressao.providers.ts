import { DataSource } from 'typeorm'
import { EscalaEstresse } from '../escala-estresse/entities/escala-estresse.entity'
import { EscalaDepressao } from './entities/escala-depressao.entity'

export const escalaDepressaoProviders = [
    {
        provide: 'ESCALA_DEPRESSAO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(EscalaDepressao),
        inject: ['DATA_SOURCE']
    }
]
