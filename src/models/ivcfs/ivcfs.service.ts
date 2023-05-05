import { Inject, Injectable } from '@nestjs/common';
import { CreateIvcfDto } from './dto/create-ivcf.dto';
import { UpdateIvcfDto } from './dto/update-ivcf.dto';
import { Repository } from 'typeorm';
import { Ivcf } from './entities/ivcf.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class IvcfsService {
  constructor(
    @Inject('IVCFS_REPOSITORY')
    private ivcfsRepository: Repository<Ivcf>,
  ) {}
  create(createIvcfDto: CreateIvcfDto) {
    return this.ivcfsRepository.save(createIvcfDto);
  }

  findAll() {
    return this.ivcfsRepository.find();
  }

  findOne(id: number) {
    return this.ivcfsRepository.findOne({ where: { id } });
  }

  update(id: number, updateIvcfDto: UpdateIvcfDto) {
    return this.ivcfsRepository.update(id, updateIvcfDto);
  }

  remove(id: number) {
    return this.ivcfsRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Ivcf> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.ivcfsRepository.findOne({
      where: { paciente_id },
    });
  }
}
