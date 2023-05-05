import { Inject, Injectable } from '@nestjs/common';
import { CreateGlicemiaControleDto } from './dto/create-glicemia_controle.dto';
import { UpdateGlicemiaControleDto } from './dto/update-glicemia_controle.dto';
import { Repository } from 'typeorm';
import { GlicemiaControle } from './entities/glicemia_controle.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class GlicemiaControlesService {
  constructor(
    @Inject('GLICEMIA_CONTROLES_REPOSITORY')
    private glicemiaControlesRepository: Repository<GlicemiaControle>,
  ) {}
  create(createGlicemiaControleDto: CreateGlicemiaControleDto) {
    return this.glicemiaControlesRepository.save(createGlicemiaControleDto);
  }

  findAll() {
    return this.glicemiaControlesRepository.find();
  }

  findOne(id: number) {
    return this.glicemiaControlesRepository.findOne({ where: { id } });
  }

  update(id: number, updateGlicemiaControleDto: UpdateGlicemiaControleDto) {
    return this.glicemiaControlesRepository.update(id, updateGlicemiaControleDto);
  }

  remove(id: number) {
    return this.glicemiaControlesRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<GlicemiaControle> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.glicemiaControlesRepository.findOne({
      where: { paciente_id },
    });
  }
}
