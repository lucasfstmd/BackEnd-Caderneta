import { Inject, Injectable } from '@nestjs/common';
import { CreateUsabilidadeDto } from './dto/create-usabilidade.dto';
import { UpdateUsabilidadeDto } from './dto/update-usabilidade.dto';
import { Repository } from 'typeorm'
import { Usabilidade } from './entities/usabilidade.entity'

@Injectable()
export class UsabilidadeService {
  constructor(
      @Inject('USABILIDADE_REPOSITORY')
      private usabilidadeRepository: Repository<Usabilidade>
  ) {
  }

  create(createUsabilidadeDto: CreateUsabilidadeDto) {
    return this.usabilidadeRepository.save(createUsabilidadeDto)
  }

  findAll() {
    return this.usabilidadeRepository.find()
  }

  findOne(id: number) {
    return this.usabilidadeRepository.findOne({ where: { id } })
  }

  update(id: number, updateUsabilidadeDto: UpdateUsabilidadeDto) {
    return this.usabilidadeRepository.update(id, updateUsabilidadeDto)
  }

  remove(id: number) {
    return this.usabilidadeRepository.delete(id)
  }

  findByPatientId(patientId: number) {
    return this.usabilidadeRepository.findBy({ paciente_id: patientId })
  }
}
