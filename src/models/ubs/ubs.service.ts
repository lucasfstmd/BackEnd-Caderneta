import { Inject, Injectable } from '@nestjs/common';
import { CreateUbDto } from './dto/create-ub.dto';
import { UpdateUbDto } from './dto/update-ub.dto';
import { Repository } from 'typeorm';
import { Ubs } from './entities/ubs.entity';

@Injectable()
export class UbsService {
  constructor(
    @Inject('UBS_REPOSITORY')
    private ubsRepository: Repository<Ubs>,
  ) {}
  create(createUbDto: CreateUbDto) {
    return this.ubsRepository.save(createUbDto);
  }

  findAll() {
    return this.ubsRepository.find();
  }

  findOne(id: number) {
    return this.ubsRepository.findOne({ where: { id } });
  }

  update(id: number, updateUbDto: UpdateUbDto) {
    return this.ubsRepository.update(id, updateUbDto);
  }

  remove(id: number) {
    return this.ubsRepository.delete(id);
  }
}
