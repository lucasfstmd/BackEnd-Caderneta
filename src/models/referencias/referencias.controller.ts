import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReferenciasService } from './referencias.service';
import { CreateReferenciaDto } from './dto/create-referencia.dto';
import { UpdateReferenciaDto } from './dto/update-referencia.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Referencias')
@Controller('referencias')
export class ReferenciasController {
  constructor(private readonly referenciasService: ReferenciasService) {}

  @Post()
  create(@Body() createReferenciaDto: CreateReferenciaDto) {
    return this.referenciasService.create(createReferenciaDto);
  }

  @Get()
  findAll() {
    return this.referenciasService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.referenciasService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.referenciasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReferenciaDto: UpdateReferenciaDto,
  ) {
    return this.referenciasService.update(+id, updateReferenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.referenciasService.remove(+id);
  }
}
