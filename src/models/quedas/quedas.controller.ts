import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuedasService } from './quedas.service';
import { CreateQuedaDto } from './dto/create-queda.dto';
import { UpdateQuedaDto } from './dto/update-queda.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Quedas')
@Controller('api/v1/quedas')
export class QuedasController {
  constructor(private readonly quedasService: QuedasService) {}

  @Post()
  create(@Body() createQuedaDto: CreateQuedaDto) {
    return this.quedasService.create(createQuedaDto);
  }

  @Get()
  findAll() {
    return this.quedasService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.quedasService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quedasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuedaDto: UpdateQuedaDto) {
    return this.quedasService.update(+id, updateQuedaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quedasService.remove(+id);
  }
}
