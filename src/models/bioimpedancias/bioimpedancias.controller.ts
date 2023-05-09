import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BioimpedanciasService } from './bioimpedancias.service';
import { CreateBioimpedanciaDto } from './dto/create-bioimpedancia.dto';
import { UpdateBioimpedanciaDto } from './dto/update-bioimpedancia.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Bioimpedancias')
@Controller('api/v1/bioimpedancias')
export class BioimpedanciasController {
  constructor(private readonly bioimpedanciasService: BioimpedanciasService) {}

  @Post()
  create(@Body() createBioimpedanciaDto: CreateBioimpedanciaDto) {
    return this.bioimpedanciasService.create(createBioimpedanciaDto);
  }

  @Get()
  findAll() {
    return this.bioimpedanciasService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.bioimpedanciasService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bioimpedanciasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBioimpedanciaDto: UpdateBioimpedanciaDto,
  ) {
    return this.bioimpedanciasService.update(+id, updateBioimpedanciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bioimpedanciasService.remove(+id);
  }
}
