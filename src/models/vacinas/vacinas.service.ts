import { Inject, Injectable } from '@nestjs/common';
import { CreateVacinaDto } from './dto/create-vacina.dto';
import { UpdateVacinaDto } from './dto/update-vacina.dto';
import { Repository } from 'typeorm';
import { Vacina } from './entities/vacina.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class VacinasService {
  constructor(
    @Inject('VACINAS_REPOSITORY')
    private vacinasRepository: Repository<Vacina>,
  ) {}
  create(createVacinaDto: CreateVacinaDto) {
    return this.vacinasRepository.save(createVacinaDto);
  }

  findAll() {
    return this.vacinasRepository.find();
  }

  findOne(id: number) {
    return this.vacinasRepository.findOne({ where: { id } });
  }

  update(id: number, updateVacinaDto: UpdateVacinaDto) {
    return this.vacinasRepository.update(id, updateVacinaDto);
  }

  remove(id: number) {
    return this.vacinasRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Vacina[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.vacinasRepository.find({
      where: { paciente_id },
    });
  }
}
