import { Inject, Injectable } from '@nestjs/common';
import { CreatePressaoControleDto } from './dto/create-pressao_controle.dto';
import { UpdatePressaoControleDto } from './dto/update-pressao_controle.dto';
import { Repository } from 'typeorm';
import { PressaoControle } from './entities/pressao_controle.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class PressaoControlesService {
  constructor(
    @Inject('PRESSAO_CONTROLES_REPOSITORY')
    private pressaoControlesRepository: Repository<PressaoControle>,
  ) {}
  create(createPressaoControleDto: CreatePressaoControleDto) {
    return this.pressaoControlesRepository.save(createPressaoControleDto);
  }

  findAll() {
    return this.pressaoControlesRepository.find();
  }

  findOne(id: number) {
    return this.pressaoControlesRepository.findOne({ where: { id } });
  }

  update(id: number, updatePressaoControleDto: UpdatePressaoControleDto) {
    return this.pressaoControlesRepository.update(id, updatePressaoControleDto);
  }

  remove(id: number) {
    return this.pressaoControlesRepository.delete(id);
  }

  async findByPacienteId(
    findPacienteId: FindPacienteIdDto,
  ): Promise<PressaoControle[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.pressaoControlesRepository.find({
      where: { paciente_id },
    });
  }
}
