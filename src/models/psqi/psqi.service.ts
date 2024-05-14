import { Inject, Injectable } from '@nestjs/common';
import { CreatePsqiDto } from './dto/create-psqi.dto';
import { UpdatePsqiDto } from './dto/update-psqi.dto';
import { Repository } from 'typeorm'
import { Psqi } from './entities/psqi.entity'

@Injectable()
export class PsqiService {
  constructor(
      @Inject('PSQI_REPOSITORY')
      private psqiRepository: Repository<Psqi>
  ) {
  }
  create(createPsqiDto: CreatePsqiDto) {
    return this.psqiRepository.save(createPsqiDto)
  }

  findAll() {
    return this.psqiRepository.find()
  }

  findOne(id: number) {
    return this.psqiRepository.findOne({ where: { id } })
  }

  update(id: number, updatePsqiDto: UpdatePsqiDto) {
    return this.psqiRepository.update(id, updatePsqiDto)
  }

  remove(id: number) {
    return this.psqiRepository.delete(id)
  }

  findByPatientId(patientId: number) {
    return this.psqiRepository.findBy({ paciente_id: patientId })
  }
}
