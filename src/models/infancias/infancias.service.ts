import { Inject, Injectable } from '@nestjs/common';
import { CreateInfanciaDto } from './dto/create-infancia.dto';
import { UpdateInfanciaDto } from './dto/update-infancia.dto';
import { Repository } from 'typeorm';
import { Infancia } from './entities/infancia.entity';
import { FindPacienteIdDto } from "../core/dto/find-pacienteId.dto";
import { Cronica } from "../cronicas/entities/cronica.entity";

@Injectable()
export class InfanciasService {
  constructor(
    @Inject('INFANCIAS_REPOSITORY')
    private infanciasRepository: Repository<Infancia>,
  ) {}
  create(createInfanciaDto: CreateInfanciaDto) {
    return this.infanciasRepository.save(createInfanciaDto);
  }

  findAll() {
    return this.infanciasRepository.find();
  }

  findOne(id: number) {
    return this.infanciasRepository.findOne({ where: { id } });
  }

  update(id: number, updateInfanciaDto: UpdateInfanciaDto) {
    return this.infanciasRepository.update(id, updateInfanciaDto);
  }

  remove(id: number) {
    return this.infanciasRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Infancia> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.infanciasRepository.findOne({
      where: { paciente_id },
    });
  }
}
