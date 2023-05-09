import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CronicasService } from './cronicas.service';
import { CreateCronicaDto } from './dto/create-cronica.dto';
import { UpdateCronicaDto } from './dto/update-cronica.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Cronicas')
@Controller('api/v1/cronicas')
export class CronicasController {
  constructor(private readonly cronicasService: CronicasService) {}

  @Post()
  create(@Body() createCronicaDto: CreateCronicaDto) {
    return this.cronicasService.create(createCronicaDto);
  }

  @Get()
  findAll() {
    return this.cronicasService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.cronicasService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cronicasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCronicaDto: UpdateCronicaDto) {
    return this.cronicasService.update(+id, updateCronicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cronicasService.remove(+id);
  }
}
