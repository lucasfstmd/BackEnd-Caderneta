import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VulnerabilidadesService } from './vulnerabilidades.service';
import { CreateVulnerabilidadeDto } from './dto/create-vulnerabilidade.dto';
import { UpdateVulnerabilidadeDto } from './dto/update-vulnerabilidade.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Vulnerabilidades')
@Controller('vulnerabilidades')
export class VulnerabilidadesController {
  constructor(
    private readonly vulnerabilidadesService: VulnerabilidadesService,
  ) {}

  @Post()
  create(@Body() createVulnerabilidadeDto: CreateVulnerabilidadeDto) {
    return this.vulnerabilidadesService.create(createVulnerabilidadeDto);
  }

  @Get()
  findAll() {
    return this.vulnerabilidadesService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.vulnerabilidadesService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vulnerabilidadesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVulnerabilidadeDto: UpdateVulnerabilidadeDto,
  ) {
    return this.vulnerabilidadesService.update(+id, updateVulnerabilidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vulnerabilidadesService.remove(+id);
  }
}
