import { Inject, Injectable } from '@nestjs/common';
import { CreateObitoDto } from './dto/create-obito.dto';
import { UpdateObitoDto } from './dto/update-obito.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { Obito } from './entities/obito.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ObitosService {
  constructor(
    @Inject('OBITOS_REPOSITORY')
    private obitosRepository: Repository<Obito>,
  ) {}
  create(createObitoDto: CreateObitoDto) {
    return this.obitosRepository.save(createObitoDto);
  }

  findAll() {
    return this.obitosRepository.find();
  }

  findOne(id: number) {
    return this.obitosRepository.findOne({ where: { id } });
  }

  update(id: number, updateObitoDto: UpdateObitoDto) {
    return this.obitosRepository.update(id, updateObitoDto);
  }

  remove(id: number) {
    return this.obitosRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Obito[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.obitosRepository.find({
      where: { paciente_id },
    });
  }
}
