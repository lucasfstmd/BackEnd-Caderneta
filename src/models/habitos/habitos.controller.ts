import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HabitosService } from './habitos.service';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Habitos')
@Controller('api/v1/habitos')
export class HabitosController {
  constructor(private readonly habitosService: HabitosService) {}

  @Post()
  create(@Body() createHabitoDto: CreateHabitoDto) {
    return this.habitosService.create(createHabitoDto);
  }

  @Get()
  findAll() {
    return this.habitosService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.habitosService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitoDto: UpdateHabitoDto) {
    return this.habitosService.update(+id, updateHabitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitosService.remove(+id);
  }
}
