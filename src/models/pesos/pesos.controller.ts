import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PesosService } from './pesos.service';
import { CreatePesoDto } from './dto/create-peso.dto';
import { UpdatePesoDto } from './dto/update-peso.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pesos')
@Controller('pesos')
export class PesosController {
  constructor(private readonly pesosService: PesosService) {}

  @Post()
  create(@Body() createPesoDto: CreatePesoDto) {
    return this.pesosService.create(createPesoDto);
  }

  @Get()
  findAll() {
    return this.pesosService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.pesosService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pesosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePesoDto: UpdatePesoDto) {
    return this.pesosService.update(+id, updatePesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pesosService.remove(+id);
  }
}
