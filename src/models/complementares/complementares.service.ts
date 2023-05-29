import { Inject, Injectable } from '@nestjs/common';
import { CreateComplementareDto } from './dto/create-complementare.dto';
import { UpdateComplementareDto } from './dto/update-complementare.dto';
import { Repository } from 'typeorm';
import { Complementar } from './entities/complementar.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class ComplementaresService {
  constructor(
    @Inject('COMPLEMENTARES_REPOSITORY')
    private complementaresRepository: Repository<Complementar>,
  ) {}
  create(createComplementareDto: CreateComplementareDto) {
    return this.complementaresRepository.save(createComplementareDto);
  }

  findAll() {
    return this.complementaresRepository.find();
  }

  findOne(id: number) {
    return this.complementaresRepository.findOne({ where: { id } });
  }

  update(id: number, updateComplementareDto: UpdateComplementareDto) {
    return this.complementaresRepository.update(id, updateComplementareDto);
  }

  remove(id: number) {
    return this.complementaresRepository.delete(id);
  }

  async findByPacienteId(
    findPacienteId: FindPacienteIdDto,
  ): Promise<Complementar[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.complementaresRepository.find({
      where: { paciente_id },
    });
  }
}
