import { Inject, Injectable } from '@nestjs/common';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto';
import { Repository } from 'typeorm';
import { Habito } from './entities/habito.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class HabitosService {
  constructor(
    @Inject('HABITOS_REPOSITORY')
    private habitosRepository: Repository<Habito>,
  ) {}
  create(createHabitoDto: CreateHabitoDto) {
    return this.habitosRepository.save(createHabitoDto);
  }

  findAll() {
    return this.habitosRepository.find();
  }

  findOne(id: number) {
    return this.habitosRepository.findOne({ where: { id } });
  }

  update(id: number, updateHabitoDto: UpdateHabitoDto) {
    return this.habitosRepository.update(id, updateHabitoDto);
  }

  remove(id: number) {
    return this.habitosRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Habito[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.habitosRepository.find({
      where: { paciente_id },
    });
  }
}
