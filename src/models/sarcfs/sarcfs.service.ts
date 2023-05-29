import { Inject, Injectable } from '@nestjs/common';
import { CreateSarcfDto } from './dto/create-sarcf.dto';
import { UpdateSarcfDto } from './dto/update-sarcf.dto';
import { Repository } from 'typeorm';
import { Sarcf } from './entities/sarcf.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { Referencia } from '../referencias/entities/referencia.entity';

@Injectable()
export class SarcfsService {
  constructor(
    @Inject('SARCFS_REPOSITORY')
    private sarcfRepository: Repository<Sarcf>,
  ) {}
  create(createSarcfDto: CreateSarcfDto) {
    return this.sarcfRepository.save(createSarcfDto);
  }

  findAll() {
    return this.sarcfRepository.find();
  }

  findOne(id: number) {
    return this.sarcfRepository.findOne({ where: { id } });
  }

  update(id: number, updateSarcfDto: UpdateSarcfDto) {
    return this.sarcfRepository.update(id, updateSarcfDto);
  }

  remove(id: number) {
    return this.sarcfRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Sarcf[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.sarcfRepository.find({
      where: { paciente_id },
    });
  }
}
