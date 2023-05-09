import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiagnosticosService } from './diagnosticos.service';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Diagnosticos')
@Controller('api/v1/diagnosticos')
export class DiagnosticosController {
  constructor(private readonly diagnosticosService: DiagnosticosService) {}

  @Post()
  create(@Body() createDiagnosticoDto: CreateDiagnosticoDto) {
    return this.diagnosticosService.create(createDiagnosticoDto);
  }

  @Get()
  findAll() {
    return this.diagnosticosService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.diagnosticosService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosticosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiagnosticoDto: UpdateDiagnosticoDto,
  ) {
    return this.diagnosticosService.update(+id, updateDiagnosticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosticosService.remove(+id);
  }
}
