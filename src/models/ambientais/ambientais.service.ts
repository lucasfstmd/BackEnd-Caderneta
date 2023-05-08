import { Inject, Injectable } from '@nestjs/common';
import { CreateAmbientaiDto } from './dto/create-ambientai.dto';
import { UpdateAmbientaiDto } from './dto/update-ambientai.dto';
import { Repository } from 'typeorm';
import { Ambientais } from './entities/ambientai.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class AmbientaisService {
  constructor(
    @Inject('AMBIENTAIS_REPOSITORY')
    private ambientaisRepository: Repository<Ambientais>,
  ) {}
  create(createAmbientaiDto: CreateAmbientaiDto) {
    return this.ambientaisRepository.save(createAmbientaiDto);
  }

  findAll() {
    return this.ambientaisRepository.find();
  }

  findOne(id: number) {
    return this.ambientaisRepository.findOne({ where: { id } });
  }

  update(id: number, updateAmbientaiDto: UpdateAmbientaiDto) {
    return this.ambientaisRepository.update(id, updateAmbientaiDto);
  }

  remove(id: number) {
    return this.ambientaisRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Ambientais[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.ambientaisRepository.find({
      where: { paciente_id },
    });
  }
}
