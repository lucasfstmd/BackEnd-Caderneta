import { Inject, Injectable } from "@nestjs/common";
import { CreateLaboratorialExameDto } from './dto/create-laboratorial_exame.dto';
import { UpdateLaboratorialExameDto } from './dto/update-laboratorial_exame.dto';
import { Repository } from "typeorm";
import { LaboratorialExames } from "./entities/laboratorial_exame.entity";

@Injectable()
export class LaboratorialExamesService {
  constructor(
    @Inject('LABORATORIAL_EXAMES_REPOSITORY')
    private laburatorialExamesRepository: Repository<LaboratorialExames>,
  ) {}
  create(createLaboratorialExameDto: CreateLaboratorialExameDto) {
    return this.laburatorialExamesRepository.save(createLaboratorialExameDto);
  }

  findAll() {
    return this.laburatorialExamesRepository.find();
  }

  findOne(id: number) {
    return this.laburatorialExamesRepository.findOne({ where: { id } });
  }

  update(id: number, updateLaboratorialExameDto: UpdateLaboratorialExameDto) {
    return this.laburatorialExamesRepository.update(id, updateLaboratorialExameDto);
  }

  remove(id: number) {
    return this.laburatorialExamesRepository.delete(id);
  }
}
