import { Inject, Injectable } from '@nestjs/common';
import { CreateAtualizacoeDto } from './dto/create-atualizacoe.dto';
import { UpdateAtualizacoeDto } from './dto/update-atualizacoe.dto';
import { Repository } from 'typeorm';
import { Atualizacoes } from './entities/atualizacoes.entity';

@Injectable()
export class AtualizacoesService {
  constructor(
    @Inject('ATUALIZACOES_REPOSITORY')
    private atualizacoesRepository: Repository<Atualizacoes>,
  ) {}
  create(createAtualizacoeDto: CreateAtualizacoeDto) {
    return this.atualizacoesRepository.save(createAtualizacoeDto);
  }

  findAll() {
    return this.atualizacoesRepository.find();
  }

  findOne(id: number) {
    return this.atualizacoesRepository.findOne({ where: { id } });
  }

  update(id: number, updateAtualizacoeDto: UpdateAtualizacoeDto) {
    return this.atualizacoesRepository.update(id, updateAtualizacoeDto);
  }

  remove(id: number) {
    return this.atualizacoesRepository.delete(id);
  }
}
