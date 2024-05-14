import { Inject, Injectable } from '@nestjs/common';
import { CreateAnsiedadeDto } from './dto/create-ansiedade.dto';
import { UpdateAnsiedadeDto } from './dto/update-ansiedade.dto';
import { Repository } from 'typeorm'
import { Ansiedade } from './entities/ansiedade.entity'

@Injectable()
export class AnsiedadeService {
  constructor(
      @Inject('ANSIEDADE_REPOSITORY')
      private ansiedadeRepository: Repository<Ansiedade>
  ) {
  }

  create(createAnsiedadeDto: CreateAnsiedadeDto) {
    return this.ansiedadeRepository.save(createAnsiedadeDto)
  }

  findAll() {
    return this.ansiedadeRepository.find()
  }

  findOne(id: number) {
    return this.ansiedadeRepository.findOne({ where: { id } })
  }

  update(id: number, updateAnsiedadeDto: UpdateAnsiedadeDto) {
    return this.ansiedadeRepository.update(id, updateAnsiedadeDto)
  }

  remove(id: number) {
    return this.ansiedadeRepository.delete(id)
  }

  findByPatientId(patientId: number) {
    return this.ansiedadeRepository.findBy({ paciente_id: patientId })
  }
}
