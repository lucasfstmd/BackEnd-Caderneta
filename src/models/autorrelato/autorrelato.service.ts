import { Inject, Injectable } from '@nestjs/common';
import { CreateAutorrelatoDto } from './dto/create-autorrelato.dto';
import { UpdateAutorrelatoDto } from './dto/update-autorrelato.dto';
import { Repository } from 'typeorm'
import { Autorrelato } from './entities/autorrelato.entity'

@Injectable()
export class AutorrelatoService {
  constructor(
      @Inject('AUTORRELATO_REPOSITORY')
      private autorrelatoRepository: Repository<Autorrelato>
  ) {
  }
  create(createAutorrelatoDto: CreateAutorrelatoDto) {
    return this.autorrelatoRepository.save(createAutorrelatoDto)
  }

  findAll() {
    return this.autorrelatoRepository.find()
  }

  findOne(id: number) {
    return this.autorrelatoRepository.findOne({ where: { id } })
  }

  update(id: number, updateAutorrelatoDto: UpdateAutorrelatoDto) {
    return this.autorrelatoRepository.update(id, updateAutorrelatoDto)
  }

  remove(id: number) {
    return this.autorrelatoRepository.delete(id)
  }

  findByPatientId(patientId: number) {
    return this.autorrelatoRepository.findBy({ paciente_id: patientId })
  }
}
