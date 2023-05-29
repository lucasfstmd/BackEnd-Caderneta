import { Inject, Injectable } from '@nestjs/common';
import { CreateLaboratorialExameDto } from './dto/create-laboratorial_exame.dto';
import { UpdateLaboratorialExameDto } from './dto/update-laboratorial_exame.dto';
import { Repository } from 'typeorm';
import { LaboratorialExames } from './entities/laboratorial_exame.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class LaboratorialExamesService {
  constructor(
    @Inject('LABORATORIAL_EXAMES_REPOSITORY')
    private laburatorialExamesRepository: Repository<LaboratorialExames>,
  ) {}
  create(createLaboratorialExameDto: CreateLaboratorialExameDto) {
    return this.laburatorialExamesRepository.save(createLaboratorialExameDto);
  }

  findAll() {
    return this.laburatorialExamesRepository.find();
  }

  findOne(id: number) {
    return this.laburatorialExamesRepository.findOne({ where: { id } });
  }

  update(id: number, updateLaboratorialExameDto: UpdateLaboratorialExameDto) {
    return this.laburatorialExamesRepository.update(
      id,
      updateLaboratorialExameDto,
    );
  }

  remove(id: number) {
    return this.laburatorialExamesRepository.delete(id);
  }

  async findByPacienteId(
    findPacienteId: FindPacienteIdDto,
  ): Promise<LaboratorialExames[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.laburatorialExamesRepository.find({
      where: { paciente_id },
    });
  }
}
