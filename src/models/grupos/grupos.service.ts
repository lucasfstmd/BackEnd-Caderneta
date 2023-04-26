import { Inject, Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { Repository } from 'typeorm';
import { Grupo } from './entities/grupo.entity';

@Injectable()
export class GruposService {
  constructor(
    @Inject('GRUPO_REPOSITORY')
    private grupoRepository: Repository<Grupo>,
  ) {}
  create(createGrupoDto: CreateGrupoDto) {
    return this.grupoRepository.save(createGrupoDto);
  }

  findAll() {
    return this.grupoRepository.find();
  }

  findOne(id: number) {
    return this.grupoRepository.findOne({ where: { id } });
  }

  update(id: number, updateGrupoDto: UpdateGrupoDto) {
    return this.grupoRepository.update(id, updateGrupoDto);
  }

  remove(id: number) {
    return this.grupoRepository.delete(id);
  }
}
