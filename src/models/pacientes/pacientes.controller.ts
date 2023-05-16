import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pacientes')
@Controller('api/v1/pacientes')
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacientesService.create(createPacienteDto);
  }

  @Get()
  findAll() {
    return this.pacientesService.findAll();
  }

  @Get('ubs/:ubs')
  findByUbs(@Param('ubs') ubs: string) {
    return this.pacientesService.findByUbs(ubs);
  }

  @Get('nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.pacientesService.findByName(nome);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacientesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacientesService.update(+id, updatePacienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacientesService.remove(+id);
  }
}
