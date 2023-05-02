import { Inject, Injectable } from '@nestjs/common';
import { CreateComplementareDto } from './dto/create-complementare.dto';
import { UpdateComplementareDto } from './dto/update-complementare.dto';
import { Repository } from 'typeorm';
import { Complementar } from './entities/complementar.entity';

@Injectable()
export class ComplementaresService {
  constructor(
    @Inject('COMPLEMENTARES_REPOSITORY')
    private complementaresRepository: Repository<Complementar>,
  ) {}
  create(createComplementareDto: CreateComplementareDto) {
    return this.complementaresRepository.create(createComplementareDto);
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
}
