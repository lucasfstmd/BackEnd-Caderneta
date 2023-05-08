import { Inject, Injectable } from '@nestjs/common';
import { CreateCirurgiaDto } from './dto/create-cirurgia.dto';
import { UpdateCirurgiaDto } from './dto/update-cirurgia.dto';
import { Repository } from 'typeorm';
import { Cirurgia } from './entities/cirurgia.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class CirurgiasService {
  constructor(
    @Inject('CIRURGIAS_REPOSITORY')
    private cirurgiasRepository: Repository<Cirurgia>,
  ) {}
  create(createCirurgiaDto: CreateCirurgiaDto) {
    return this.cirurgiasRepository.save(createCirurgiaDto);
  }

  findAll() {
    return this.cirurgiasRepository.find();
  }

  findOne(id: number) {
    return this.cirurgiasRepository.findOne({ where: { id } });
  }

  update(id: number, updateCirurgiaDto: UpdateCirurgiaDto) {
    return this.cirurgiasRepository.update(id, updateCirurgiaDto);
  }

  remove(id: number) {
    return this.cirurgiasRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Cirurgia[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.cirurgiasRepository.find({
      where: { paciente_id },
    });
  }
}
