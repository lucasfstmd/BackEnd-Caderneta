import { Inject, Injectable } from '@nestjs/common';
import { CreateCronicaDto } from './dto/create-cronica.dto';
import { UpdateCronicaDto } from './dto/update-cronica.dto';
import { Repository } from 'typeorm';
import { Cronica } from './entities/cronica.entity';

@Injectable()
export class CronicasService {
  constructor(
    @Inject('CRONICAS_REPOSITORY')
    private cronicasRepository: Repository<Cronica>,
  ) {}
  create(createCronicaDto: CreateCronicaDto) {
    return this.cronicasRepository.create(createCronicaDto);
  }

  findAll() {
    return this.cronicasRepository.find();
  }

  findOne(id: number) {
    return this.cronicasRepository.findOne({ where: { id } });
  }

  update(id: number, updateCronicaDto: UpdateCronicaDto) {
    return this.cronicasRepository.update(id, updateCronicaDto);
  }

  remove(id: number) {
    return this.cronicasRepository.delete(id);
  }
}
