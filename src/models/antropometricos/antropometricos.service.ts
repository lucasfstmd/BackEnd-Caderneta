import { Inject, Injectable } from '@nestjs/common';
import { CreateAntropometricoDto } from './dto/create-antropometrico.dto';
import { UpdateAntropometricoDto } from './dto/update-antropometrico.dto';
import { Repository } from 'typeorm';
import { Antropometricos } from './entities/antropometrico.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class AntropometricosService {
  constructor(
    @Inject('ANTROPOMETRICAS_REPOSITORY')
    private antropometricasRepository: Repository<Antropometricos>,
  ) {}
  create(createAntropometricoDto: CreateAntropometricoDto) {
    return this.antropometricasRepository.save(createAntropometricoDto);
  }

  findAll() {
    return this.antropometricasRepository.find();
  }

  findOne(id: number) {
    return this.antropometricasRepository.findOne({ where: { id } });
  }

  update(id: number, updateAntropometricoDto: UpdateAntropometricoDto) {
    return this.antropometricasRepository.update(id, updateAntropometricoDto);
  }

  remove(id: number) {
    return this.antropometricasRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Antropometricos> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.antropometricasRepository.findOne({
      where: { paciente_id },
    });
  }
}
