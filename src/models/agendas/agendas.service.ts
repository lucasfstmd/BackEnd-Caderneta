import { Inject, Injectable } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { Repository } from 'typeorm';
import { Agenda } from './entities/agenda.entity';

@Injectable()
export class AgendasService {
  constructor(
    @Inject('AGENDA_REPOSITORY')
    private agendaRepository: Repository<Agenda>,
  ) {}
  create(createAgendaDto: CreateAgendaDto) {
    return this.agendaRepository.save(createAgendaDto);
  }

  findAll() {
    return this.agendaRepository.find();
  }

  findOne(id: number) {
    return this.agendaRepository.findOne({ where: { id } });
  }

  update(id: number, updateAgendaDto: UpdateAgendaDto) {
    return this.agendaRepository.update(id, updateAgendaDto);
  }

  remove(id: number) {
    return this.agendaRepository.delete(id);
  }
}
