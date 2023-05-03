import { Inject, Injectable } from '@nestjs/common';
import { CreateFragilidadeDto } from './dto/create-fragilidade.dto';
import { UpdateFragilidadeDto } from './dto/update-fragilidade.dto';
import { Repository } from 'typeorm';
import { Fragilidade } from './entities/fragilidade.entity';

@Injectable()
export class FragilidadesService {
  constructor(
    @Inject('FRAGILIDADES_REPOSITORY')
    private fragilidadesRepository: Repository<Fragilidade>,
  ) {}
  create(createFragilidadeDto: CreateFragilidadeDto) {
    return this.fragilidadesRepository.save(createFragilidadeDto);
  }

  findAll() {
    return this.fragilidadesRepository.find();
  }

  findOne(id: number) {
    return this.fragilidadesRepository.findOne({ where: { id } });
  }

  update(id: number, updateFragilidadeDto: UpdateFragilidadeDto) {
    return this.fragilidadesRepository.update(id, updateFragilidadeDto);
  }

  remove(id: number) {
    return this.fragilidadesRepository.delete(id);
  }
}
