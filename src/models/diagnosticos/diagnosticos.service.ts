import { Inject, Injectable } from '@nestjs/common';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
import { Repository } from 'typeorm';
import { Diagnostico } from './entities/diagnostico.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class DiagnosticosService {
  constructor(
    @Inject('DIAGNOSTICOS_REPOSITORY')
    private diagnosticosRepository: Repository<Diagnostico>,
  ) {}
  create(createDiagnosticoDto: CreateDiagnosticoDto) {
    return this.diagnosticosRepository.save(createDiagnosticoDto);
  }

  findAll() {
    return this.diagnosticosRepository.find();
  }

  findOne(id: number) {
    return this.diagnosticosRepository.findOne({ where: { id } });
  }

  update(id: number, updateDiagnosticoDto: UpdateDiagnosticoDto) {
    return this.diagnosticosRepository.update(id, updateDiagnosticoDto);
  }

  remove(id: number) {
    return this.diagnosticosRepository.delete(id);
  }

  async findByPacienteId(
    findPacienteId: FindPacienteIdDto,
  ): Promise<Diagnostico[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.diagnosticosRepository.find({
      where: { paciente_id },
    });
  }
}
