import { Inject, Injectable } from '@nestjs/common';
import { CreateBucalSaudeDto } from './dto/create-bucal_saude.dto';
import { UpdateBucalSaudeDto } from './dto/update-bucal_saude.dto';
import { Repository } from 'typeorm';
import { BucalSaude } from './entities/bucal_saude.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class BucalSaudesService {
  constructor(
    @Inject('BUCAL_SAUDES_REPOSITORY')
    private bucal_saudesRepository: Repository<BucalSaude>,
  ) {}
  create(createBucalSaudeDto: CreateBucalSaudeDto) {
    return this.bucal_saudesRepository.save(createBucalSaudeDto);
  }

  findAll() {
    return this.bucal_saudesRepository.find();
  }

  findOne(id: number) {
    return this.bucal_saudesRepository.findOne({ where: { id } });
  }

  update(id: number, updateBucalSaudeDto: UpdateBucalSaudeDto) {
    return this.bucal_saudesRepository.update(id, updateBucalSaudeDto);
  }

  remove(id: number) {
    return this.bucal_saudesRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<BucalSaude[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.bucal_saudesRepository.find({
      where: { paciente_id },
    });
  }
}
