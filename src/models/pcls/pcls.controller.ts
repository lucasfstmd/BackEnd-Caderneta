import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PclsService } from './pcls.service';
import { CreatePclDto } from './dto/create-pcl.dto';
import { UpdatePclDto } from './dto/update-pcl.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pcls')
@Controller('pcls')
export class PclsController {
  constructor(private readonly pclsService: PclsService) {}

  @Post()
  create(@Body() createPclDto: CreatePclDto) {
    return this.pclsService.create(createPclDto);
  }

  @Get()
  findAll() {
    return this.pclsService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.pclsService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pclsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePclDto: UpdatePclDto) {
    return this.pclsService.update(+id, updatePclDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pclsService.remove(+id);
  }
}
