import { Inject, Injectable } from '@nestjs/common';
import { CreateReacoeDto } from './dto/create-reacoe.dto';
import { UpdateReacoeDto } from './dto/update-reacoe.dto';
import { Repository } from 'typeorm';
import { Reacao } from './entities/reacoes.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class ReacoesService {
  constructor(
    @Inject('REACOES_PROVIDERS')
    private reacoesRepository: Repository<Reacao>,
  ) {}
  create(createReacoeDto: CreateReacoeDto) {
    return this.reacoesRepository.save(createReacoeDto);
  }

  findAll() {
    return this.reacoesRepository.find();
  }

  findOne(id: number) {
    return this.reacoesRepository.findOne({ where: { id } });
  }

  update(id: number, updateReacoeDto: UpdateReacoeDto) {
    return this.reacoesRepository.update(id, updateReacoeDto);
  }

  remove(id: number) {
    return this.reacoesRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Reacao[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.reacoesRepository.find({
      where: { paciente_id },
    });
  }
}
