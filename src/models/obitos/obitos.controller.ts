import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ObitosService } from './obitos.service';
import { CreateObitoDto } from './dto/create-obito.dto';
import { UpdateObitoDto } from './dto/update-obito.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Obitos')
@Controller('api/v1/obitos')
export class ObitosController {
  constructor(private readonly obitosService: ObitosService) {}

  @Post()
  create(@Body() createObitoDto: CreateObitoDto) {
    return this.obitosService.create(createObitoDto);
  }

  @Get()
  findAll() {
    return this.obitosService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.obitosService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.obitosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObitoDto: UpdateObitoDto) {
    return this.obitosService.update(+id, updateObitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.obitosService.remove(+id);
  }
}
