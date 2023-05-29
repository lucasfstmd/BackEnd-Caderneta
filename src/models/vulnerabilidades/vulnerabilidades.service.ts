import { Inject, Injectable } from '@nestjs/common';
import { CreateVulnerabilidadeDto } from './dto/create-vulnerabilidade.dto';
import { UpdateVulnerabilidadeDto } from './dto/update-vulnerabilidade.dto';
import { Repository } from 'typeorm';
import { Vulnerabilidade } from './entities/vulnerabilidade.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class VulnerabilidadesService {
  constructor(
    @Inject('VULNERABILIDADES_PROVIDERS')
    private vulnerabilidadesRepository: Repository<Vulnerabilidade>,
  ) {}
  create(createVulnerabilidadeDto: CreateVulnerabilidadeDto) {
    return this.vulnerabilidadesRepository.save(createVulnerabilidadeDto);
  }

  findAll() {
    return this.vulnerabilidadesRepository.find();
  }

  findOne(id: number) {
    return this.vulnerabilidadesRepository.findOne({ where: { id } });
  }

  update(id: number, updateVulnerabilidadeDto: UpdateVulnerabilidadeDto) {
    return this.vulnerabilidadesRepository.update(id, updateVulnerabilidadeDto);
  }

  remove(id: number) {
    return this.vulnerabilidadesRepository.delete(id);
  }

  async findByPacienteId(
    findPacienteId: FindPacienteIdDto,
  ): Promise<Vulnerabilidade[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.vulnerabilidadesRepository.find({
      where: { paciente_id },
    });
  }
}
