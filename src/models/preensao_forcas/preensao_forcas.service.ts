import { Inject, Injectable } from '@nestjs/common';
import { CreatePreensaoForcaDto } from './dto/create-preensao_forca.dto';
import { UpdatePreensaoForcaDto } from './dto/update-preensao_forca.dto';
import { Repository } from 'typeorm';
import { PreensaoForca } from './entities/preensao_forca.entity';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@Injectable()
export class PreensaoForcasService {
  constructor(
    @Inject('PRESSAO_FORCAS_REPOSITORY')
    private pressaoForcasRepository: Repository<PreensaoForca>,
  ) {}
  create(createPreensaoForcaDto: CreatePreensaoForcaDto) {
    return this.pressaoForcasRepository.save(createPreensaoForcaDto);
  }

  findAll() {
    return this.pressaoForcasRepository.find();
  }

  findOne(id: number) {
    return this.pressaoForcasRepository.findOne({ where: { id } });
  }

  update(id: number, updatePreensaoForcaDto: UpdatePreensaoForcaDto) {
    return this.pressaoForcasRepository.update(id, updatePreensaoForcaDto);
  }

  remove(id: number) {
    return this.pressaoForcasRepository.delete(id);
  }

  async findByPacienteId(findPacienteId: FindPacienteIdDto): Promise<PreensaoForca[]> {
    const paciente_id = findPacienteId.paciente_id;
    return await this.pressaoForcasRepository.find({
      where: { paciente_id },
    });
  }
}
