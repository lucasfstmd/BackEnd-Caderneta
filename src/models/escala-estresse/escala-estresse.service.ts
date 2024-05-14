import { Inject, Injectable } from '@nestjs/common';
import { CreateEscalaEstresseDto } from './dto/create-escala-estresse.dto';
import { UpdateEscalaEstresseDto } from './dto/update-escala-estresse.dto';
import { Repository } from 'typeorm'
import { EscalaEstresse } from './entities/escala-estresse.entity'

@Injectable()
export class EscalaEstresseService {
  constructor(
      @Inject('ESCALA_ESTRESSE_REPOSITORY')
      private escalaEstresseRepository: Repository<EscalaEstresse>
  ) {
  }

  create(createEscalaEstresseDto: CreateEscalaEstresseDto) {
    return this.escalaEstresseRepository.save(createEscalaEstresseDto)
  }

  findAll() {
    return this.escalaEstresseRepository.find()
  }

  findOne(id: number) {
    return this.escalaEstresseRepository.findOne({ where: { id } })
  }

  update(id: number, updateEscalaEstresseDto: UpdateEscalaEstresseDto) {
    return this.escalaEstresseRepository.update(id, updateEscalaEstresseDto)
  }

  remove(id: number) {
    return this.escalaEstresseRepository.delete(id)
  }

  findByPatientId(patientId: number) {
    return this.escalaEstresseRepository.findBy({ paciente_id: patientId })
  }
}
