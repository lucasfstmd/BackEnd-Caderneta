import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IntensidadesService } from './intensidades.service';
import { CreateIntensidadeDto } from './dto/create-intensidade.dto';
import { UpdateIntensidadeDto } from './dto/update-intensidade.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Intensidades')
@Controller('api/v1/intensidades')
export class IntensidadesController {
  constructor(private readonly intensidadesService: IntensidadesService) {}

  @Post()
  create(@Body() createIntensidadeDto: CreateIntensidadeDto) {
    return this.intensidadesService.create(createIntensidadeDto);
  }

  @Get()
  findAll() {
    return this.intensidadesService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.intensidadesService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intensidadesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIntensidadeDto: UpdateIntensidadeDto,
  ) {
    return this.intensidadesService.update(+id, updateIntensidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intensidadesService.remove(+id);
  }
}
