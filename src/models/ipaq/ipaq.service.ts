import { Inject, Injectable } from '@nestjs/common';
import { CreateIpaqDto } from './dto/create-ipaq.dto';
import { UpdateIpaqDto } from './dto/update-ipaq.dto';
import { Repository } from 'typeorm'
import { Ipaq } from './entities/ipaq.entity'

@Injectable()
export class IpaqService {
  constructor(
      @Inject('IPAQ_REPOSITORY')
      private ipaqRepository: Repository<Ipaq>
  ) {
  }
  create(createIpaqDto: CreateIpaqDto) {
    return this.ipaqRepository.save(createIpaqDto)
  }

  findAll() {
    return this.ipaqRepository.find()
  }

  findOne(id: number) {
    return this.ipaqRepository.findOne({ where: { id } })
  }

  update(id: number, updateIpaqDto: UpdateIpaqDto) {
    return this.ipaqRepository.update(id, updateIpaqDto)
  }

  remove(id: number) {
    return this.ipaqRepository.delete(id)
  }

  findByPatientId(patientId: number) {
    return this.ipaqRepository.findBy({ paciente_id: patientId })
  }
}
