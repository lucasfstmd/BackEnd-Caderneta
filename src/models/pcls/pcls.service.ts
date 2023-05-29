import { Inject, Injectable } from '@nestjs/common';
import { CreatePclDto } from './dto/create-pcl.dto';
import { UpdatePclDto } from './dto/update-pcl.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { Obito } from '../obitos/entities/obito.entity';
import { Pcls } from './entities/pcls.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PclsService {
  constructor(
    @Inject('PCLS_REPOSITORY')
    private pclsRepository: Repository<Pcls>,
  ) {}
  create(createPclDto: CreatePclDto) {
    return this.pclsRepository.save(createPclDto);
  }

  findAll() {
    return this.pclsRepository.find();
  }

  findOne(id: number) {
    return this.pclsRepository.findOne({ where: { id } });
  }

  update(id: number, updatePclDto: UpdatePclDto) {
    return this.pclsRepository.update(id, updatePclDto);
  }

  remove(id: number) {
    return this.pclsRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Pcls[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.pclsRepository.find({
      where: { paciente_id },
    });
  }
}
