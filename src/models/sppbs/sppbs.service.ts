import { Inject, Injectable } from '@nestjs/common';
import { CreateSppbDto } from './dto/create-sppb.dto';
import { UpdateSppbDto } from './dto/update-sppb.dto';
import { Repository } from 'typeorm';
import { Sppb } from './entities/sppb.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class SppbsService {
  constructor(
    @Inject('SPPBS_REPOSITORY')
    private sppbsRepository: Repository<Sppb>,
  ) {}
  create(createSppbDto: CreateSppbDto) {
    return this.sppbsRepository.save(createSppbDto);
  }

  findAll() {
    return this.sppbsRepository.find();
  }

  findOne(id: number) {
    return this.sppbsRepository.findOne({ where: { id } });
  }

  update(id: number, updateSppbDto: UpdateSppbDto) {
    return this.sppbsRepository.update(id, updateSppbDto);
  }

  remove(id: number) {
    return this.sppbsRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<Sppb[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.sppbsRepository.find({
      where: { paciente_id },
    });
  }
}
