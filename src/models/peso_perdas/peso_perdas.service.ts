import { Inject, Injectable } from '@nestjs/common';
import { CreatePesoPerdaDto } from './dto/create-peso_perda.dto';
import { UpdatePesoPerdaDto } from './dto/update-peso_perda.dto';
import { Repository } from 'typeorm';
import { PesoPerda } from './entities/peso_perda.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class PesoPerdasService {
  constructor(
    @Inject('PESO_PERDAS_REPOSITORY')
    private pesoPerdasRepository: Repository<PesoPerda>,
  ) {}
  create(createPesoPerdaDto: CreatePesoPerdaDto) {
    return this.pesoPerdasRepository.save(createPesoPerdaDto);
  }

  findAll() {
    return this.pesoPerdasRepository.find();
  }

  findOne(id: number) {
    return this.pesoPerdasRepository.findOne({ where: { id } });
  }

  update(id: number, updatePesoPerdaDto: UpdatePesoPerdaDto) {
    return this.pesoPerdasRepository.update(id, updatePesoPerdaDto);
  }

  remove(id: number) {
    return this.pesoPerdasRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<PesoPerda> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.pesoPerdasRepository.findOne({
      where: { paciente_id },
    });
  }
}
