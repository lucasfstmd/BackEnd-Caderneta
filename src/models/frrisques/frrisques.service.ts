import { Inject, Injectable } from '@nestjs/common';
import { CreateFrrisqueDto } from './dto/create-frrisque.dto';
import { UpdateFrrisqueDto } from './dto/update-frrisque.dto';
import { Repository } from 'typeorm';
import { Frrisque } from './entities/frrisque.entity';

@Injectable()
export class FrrisquesService {
  constructor(
    @Inject('FRRISQUES_REPOSITORY')
    private frrisquesRepository: Repository<Frrisque>,
  ) {}
  create(createFrrisqueDto: CreateFrrisqueDto) {
    return this.frrisquesRepository.save(createFrrisqueDto);
  }

  findAll() {
    return this.frrisquesRepository.find();
  }

  findOne(id: number) {
    return this.frrisquesRepository.findOne({ where: { id } });
  }

  update(id: number, updateFrrisqueDto: UpdateFrrisqueDto) {
    return this.frrisquesRepository.update(id, updateFrrisqueDto);
  }

  remove(id: number) {
    return this.frrisquesRepository.delete(id);
  }
}
