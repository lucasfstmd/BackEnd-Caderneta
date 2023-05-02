import { Inject, Injectable } from '@nestjs/common';
import { CreateAvaliacoeDto } from './dto/create-avaliacoe.dto';
import { UpdateAvaliacoeDto } from './dto/update-avaliacoe.dto';
import { Repository } from 'typeorm';
import { Avaliacao } from './entities/avaliacao.entity';

@Injectable()
export class AvaliacoesService {
  constructor(
    @Inject('AVALIACOES_REPOSITORY')
    private avaliacoesRepository: Repository<Avaliacao>,
  ) {}
  create(createAvaliacoeDto: CreateAvaliacoeDto) {
    return this.avaliacoesRepository.save(createAvaliacoeDto);
  }

  findAll() {
    return this.avaliacoesRepository.find();
  }

  findOne(id: number) {
    return this.avaliacoesRepository.findOne({ where: { id } });
  }

  update(id: number, updateAvaliacoeDto: UpdateAvaliacoeDto) {
    return this.avaliacoesRepository.update(id, updateAvaliacoeDto);
  }

  remove(id: number) {
    return this.avaliacoesRepository.delete(id);
  }
}
