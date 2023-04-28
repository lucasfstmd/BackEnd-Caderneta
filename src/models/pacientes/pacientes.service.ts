import { Inject, Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Repository } from 'typeorm';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacientesService {
  constructor(
    @Inject('PACIENTE_REPOSITORY')
    private pacientesRepository: Repository<Paciente>,
  ) {}
  create(createPacienteDto: CreatePacienteDto) {
    return this.pacientesRepository.save(createPacienteDto);
  }

  findAll() {
    return this.pacientesRepository.find();
  }

  findOne(id: number) {
    return this.pacientesRepository.findOne({ where: { id } });
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return this.pacientesRepository.update(id, updatePacienteDto);
  }

  remove(id: number) {
    return this.pacientesRepository.delete(id);
  }
}
