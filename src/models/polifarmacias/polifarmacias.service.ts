import { Inject, Injectable } from '@nestjs/common';
import { CreatePolifarmaciaDto } from './dto/create-polifarmacia.dto';
import { UpdatePolifarmaciaDto } from './dto/update-polifarmacia.dto';
import { Repository } from 'typeorm';
import { Polifarmacia } from './entities/polifarmacia.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class PolifarmaciasService {
  constructor(
    @Inject('POLIFARMACIAS_REPOSITORY')
    private polifarmaciasRepository: Repository<Polifarmacia>,
  ) {}
  create(createPolifarmaciaDto: CreatePolifarmaciaDto) {
    return this.polifarmaciasRepository.save(createPolifarmaciaDto);
  }

  findAll() {
    return this.polifarmaciasRepository.find();
  }

  findOne(id: number) {
    return this.polifarmaciasRepository.findOne({ where: { id } });
  }

  update(id: number, updatePolifarmaciaDto: UpdatePolifarmaciaDto) {
    return this.polifarmaciasRepository.update(id, updatePolifarmaciaDto);
  }

  remove(id: number) {
    return this.polifarmaciasRepository.delete(id);
  }

  async findByPacienteId(
    findPacienteId: FindPacienteIdDto,
  ): Promise<Polifarmacia[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.polifarmaciasRepository.find({
      where: { paciente_id },
    });
  }
}
