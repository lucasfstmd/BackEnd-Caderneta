import { Inject, Injectable } from '@nestjs/common';
import { CreateEseDto } from './dto/create-ese.dto';
import { UpdateEseDto } from './dto/update-ese.dto';
import { Repository } from 'typeorm'
import { Ese } from './entities/ese.entity'

@Injectable()
export class EseService {
  constructor(
      @Inject('ESE_REPOSITORY')
      private eseRepository: Repository<Ese>
  ) {
  }
  create(createEseDto: CreateEseDto) {
    return this.eseRepository.save(createEseDto)
  }

  findAll() {
    return this.eseRepository.find()
  }

  findOne(id: number) {
    return this.eseRepository.findOne({ where: { id } })
  }

  update(id: number, updateEseDto: UpdateEseDto) {
    return this.eseRepository.update(id, updateEseDto)
  }

  remove(id: number) {
    return this.eseRepository.delete(id)
  }

  findByPatientId(patientId: number) {
    return this.eseRepository.findBy({ paciente_id: patientId })
  }
}
