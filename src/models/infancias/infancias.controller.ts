import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InfanciasService } from './infancias.service';
import { CreateInfanciaDto } from './dto/create-infancia.dto';
import { UpdateInfanciaDto } from './dto/update-infancia.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Infancias')
@Controller('api/v1/infancias')
export class InfanciasController {
  constructor(private readonly infanciasService: InfanciasService) {}

  @Post()
  create(@Body() createInfanciaDto: CreateInfanciaDto) {
    return this.infanciasService.create(createInfanciaDto);
  }

  @Get()
  findAll() {
    return this.infanciasService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.infanciasService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.infanciasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInfanciaDto: UpdateInfanciaDto,
  ) {
    return this.infanciasService.update(+id, updateInfanciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.infanciasService.remove(+id);
  }
}
