import { Inject, Injectable } from '@nestjs/common';
import { CreateIvcfDto } from './dto/create-ivcf.dto';
import { UpdateIvcfDto } from './dto/update-ivcf.dto';
import { Repository } from 'typeorm';
import { Ivcf } from './entities/ivcf.entity';

@Injectable()
export class IvcfsService {
  constructor(
    @Inject('IVCFS_REPOSITORY')
    private ivcfsRepository: Repository<Ivcf>,
  ) {}
  create(createIvcfDto: CreateIvcfDto) {
    return this.ivcfsRepository.save(createIvcfDto);
  }

  findAll() {
    return this.ivcfsRepository.find();
  }

  findOne(id: number) {
    return this.ivcfsRepository.findOne({ where: { id } });
  }

  update(id: number, updateIvcfDto: UpdateIvcfDto) {
    return this.ivcfsRepository.update(id, updateIvcfDto);
  }

  remove(id: number) {
    return this.ivcfsRepository.delete(id);
  }
}
