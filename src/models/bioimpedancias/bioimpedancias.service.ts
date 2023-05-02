import { Inject, Injectable } from "@nestjs/common";
import { CreateBioimpedanciaDto } from './dto/create-bioimpedancia.dto';
import { UpdateBioimpedanciaDto } from './dto/update-bioimpedancia.dto';
import { Repository } from "typeorm";
import { Bioimpedancia } from "./entities/bioimpedancia.entity";

@Injectable()
export class BioimpedanciasService {
  constructor(
    @Inject('BIOIMPEDANCIAS_REPOSITORY')
    private bioimpedanciasRepository: Repository<Bioimpedancia>,
  ) {}
  create(createBioimpedanciaDto: CreateBioimpedanciaDto) {
    return this.bioimpedanciasRepository.save(createBioimpedanciaDto);
  }

  findAll() {
    return this.bioimpedanciasRepository.find();
  }

  findOne(id: number) {
    return this.bioimpedanciasRepository.findOne({ where: { id } });
  }

  update(id: number, updateBioimpedanciaDto: UpdateBioimpedanciaDto) {
    return this.bioimpedanciasRepository.update(id, updateBioimpedanciaDto);
  }

  remove(id: number) {
    return this.bioimpedanciasRepository.delete(id);
  }
}
