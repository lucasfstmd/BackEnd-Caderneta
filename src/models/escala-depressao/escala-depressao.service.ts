import { Inject, Injectable } from '@nestjs/common';
import { CreateEscalaDepressaoDto } from './dto/create-escala-depressao.dto';
import { UpdateEscalaDepressaoDto } from './dto/update-escala-depressao.dto';
import { Repository } from 'typeorm'
import { EscalaDepressao } from './entities/escala-depressao.entity'

@Injectable()
export class EscalaDepressaoService {
  constructor(
      @Inject('ESCALA_DEPRESSAO_REPOSITORY')
      private escalaDepressaoRepository: Repository<EscalaDepressao>
  ) {
  }
  create(createEscalaDepressaoDto: CreateEscalaDepressaoDto) {
    return this.escalaDepressaoRepository.save(createEscalaDepressaoDto)
  }

  findAll() {
    return this.escalaDepressaoRepository.find()
  }

  findOne(id: number) {
    return this.escalaDepressaoRepository.findOne({ where: { id } })
  }

  update(id: number, updateEscalaDepressaoDto: UpdateEscalaDepressaoDto) {
    return this.escalaDepressaoRepository.update(id, updateEscalaDepressaoDto)
  }

  remove(id: number) {
    return this.escalaDepressaoRepository.delete(id)
  }

  findByPatientId(patientId: number) {
    return this.escalaDepressaoRepository.findBy({ paciente_id: patientId })
  }
}
