import { Inject, Injectable } from '@nestjs/common';
import { CreateFamiliareDto } from './dto/create-familiare.dto';
import { UpdateFamiliareDto } from './dto/update-familiare.dto';
import { Repository } from 'typeorm';
import { Familiar } from './entities/familiar.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class FamiliaresService {
  constructor(
    @Inject('FAMILIARES_REPOSITORY')
    private familiaresRepository: Repository<Familiar>,
  ) {}
  create(createFamiliareDto: CreateFamiliareDto) {
    return this.familiaresRepository.save(createFamiliareDto);
  }

  findAll() {
    return this.familiaresRepository.find();
  }

  findOne(id: number) {
    return this.familiaresRepository.findOne({ where: { id } });
  }

  update(id: number, updateFamiliareDto: UpdateFamiliareDto) {
    return this.familiaresRepository.update(id, updateFamiliareDto);
  }

  remove(id: number) {
    return this.familiaresRepository.delete(id);
  }

  async findByPacienteId(
    findPacienteId: FindPacienteIdDto,
  ): Promise<Familiar[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.familiaresRepository.find({
      where: { paciente_id },
    });
  }
}
