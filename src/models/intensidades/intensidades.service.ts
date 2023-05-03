import { Inject, Injectable } from '@nestjs/common';
import { CreateIntensidadeDto } from './dto/create-intensidade.dto';
import { UpdateIntensidadeDto } from './dto/update-intensidade.dto';
import { Repository } from 'typeorm';
import { Intensidade } from './entities/intensidade.entity';

@Injectable()
export class IntensidadesService {
  constructor(
    @Inject('INTENSIDADES_REPOSITORY')
    private intensidadesRepository: Repository<Intensidade>,
  ) {}
  create(createIntensidadeDto: CreateIntensidadeDto) {
    return this.intensidadesRepository.save(createIntensidadeDto);
  }

  findAll() {
    return this.intensidadesRepository.find();
  }

  findOne(id: number) {
    return this.intensidadesRepository.findOne({ where: { id } });
  }

  update(id: number, updateIntensidadeDto: UpdateIntensidadeDto) {
    return this.intensidadesRepository.update(id, updateIntensidadeDto);
  }

  remove(id: number) {
    return this.intensidadesRepository.delete(id);
  }
}
