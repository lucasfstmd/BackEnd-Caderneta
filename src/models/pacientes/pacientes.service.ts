import { Inject, Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacientesService {
  constructor(
    @Inject('PACIENTE_REPOSITORY')
    private pacienteRepository: Repository<Paciente>,
  ) {}
  create(createPacienteDto: CreatePacienteDto) {
    return this.pacienteRepository.save(createPacienteDto);
  }

  findAll() {
    return this.pacienteRepository.find();
  }

  findOne(id: number) {
    return this.pacienteRepository.findOne({ where: { id } });
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteRepository.update(id, updatePacienteDto);
  }

  remove(id: number) {
    return this.pacienteRepository.delete(id);
  }
}
