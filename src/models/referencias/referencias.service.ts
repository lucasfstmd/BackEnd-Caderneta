import { Inject, Injectable } from '@nestjs/common';
import { CreateReferenciaDto } from './dto/create-referencia.dto';
import { UpdateReferenciaDto } from './dto/update-referencia.dto';
import { Repository } from 'typeorm';
import { Referencia } from './entities/referencia.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class ReferenciasService {
  constructor(
    @Inject('REFERENCIAS_REPOSITORY')
    private referenciasRepository: Repository<Referencia>,
  ) {}
  create(createReferenciaDto: CreateReferenciaDto) {
    return this.referenciasRepository.save(createReferenciaDto);
  }

  findAll() {
    return this.referenciasRepository.find();
  }

  findOne(id: number) {
    return this.referenciasRepository.findOne({ where: { id } });
  }

  update(id: number, updateReferenciaDto: UpdateReferenciaDto) {
    return this.referenciasRepository.update(id, updateReferenciaDto);
  }

  remove(id: number) {
    return this.referenciasRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Referencia[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.referenciasRepository.find({
      where: { paciente_id },
    });
  }
}
