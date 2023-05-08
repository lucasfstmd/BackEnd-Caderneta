import { Inject, Injectable } from '@nestjs/common';
import { CreatePesoDto } from './dto/create-peso.dto';
import { UpdatePesoDto } from './dto/update-peso.dto';
import { Repository } from 'typeorm';
import { Peso } from './entities/peso.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class PesosService {
  constructor(
    @Inject('PESOS_REPOSITORY')
    private pesosRepository: Repository<Peso>,
  ) {}
  create(createPesoDto: CreatePesoDto) {
    return this.pesosRepository.save(createPesoDto);
  }

  findAll() {
    return this.pesosRepository.find();
  }

  findOne(id: number) {
    return this.pesosRepository.findOne({ where: { id } });
  }

  update(id: number, updatePesoDto: UpdatePesoDto) {
    return this.pesosRepository.update(id, updatePesoDto);
  }

  remove(id: number) {
    return this.pesosRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Peso[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.pesosRepository.find({
      where: { paciente_id },
    });
  }
}
