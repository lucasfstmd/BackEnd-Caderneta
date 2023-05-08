import { Inject, Injectable } from '@nestjs/common';
import { CreateQuedaDto } from './dto/create-queda.dto';
import { UpdateQuedaDto } from './dto/update-queda.dto';
import { Repository } from 'typeorm';
import { Queda } from './entities/queda.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class QuedasService {
  constructor(
    @Inject('QUEDAS_REPOSITORY')
    private quedasRepository: Repository<Queda>,
  ) {}

  create(createQuedaDto: CreateQuedaDto) {
    return this.quedasRepository.save(createQuedaDto);
  }

  findAll() {
    return this.quedasRepository.find();
  }

  findOne(id: number) {
    return this.quedasRepository.findOne({ where: { id } });
  }

  update(id: number, updateQuedaDto: UpdateQuedaDto) {
    return this.quedasRepository.update(id, updateQuedaDto);
  }

  remove(id: number) {
    return this.quedasRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Queda[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.quedasRepository.find({
      where: { paciente_id },
    });
  }
}
