import { Inject, Injectable } from "@nestjs/common";
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
import { Repository } from "typeorm";
import { Diagnostico } from "./entities/diagnostico.entity";

@Injectable()
export class DiagnosticosService {
  constructor(
    @Inject('DIAGNOSTICOS_REPOSITORY')
    private diagnosticosRepository: Repository<Diagnostico>,
  ) {}
  create(createDiagnosticoDto: CreateDiagnosticoDto) {
    return this.diagnosticosRepository.create(createDiagnosticoDto);
  }

  findAll() {
    return this.diagnosticosRepository.find();
  }

  findOne(id: number) {
    return this.diagnosticosRepository.findOne({ where: { id } });
  }

  update(id: number, updateDiagnosticoDto: UpdateDiagnosticoDto) {
    return this.diagnosticosRepository.update(id, updateDiagnosticoDto);
  }

  remove(id: number) {
    return this.diagnosticosRepository.delete(id);
  }
}
