import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AntropometricosService } from './antropometricos.service';
import { CreateAntropometricoDto } from './dto/create-antropometrico.dto';
import { UpdateAntropometricoDto } from './dto/update-antropometrico.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Antropometricos')
@Controller('api/v1/antropometricos')
export class AntropometricosController {
  constructor(
    private readonly antropometricosService: AntropometricosService,
  ) {}

  @Post()
  create(@Body() createAntropometricoDto: CreateAntropometricoDto) {
    return this.antropometricosService.create(createAntropometricoDto);
  }

  @Get()
  findAll() {
    return this.antropometricosService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.antropometricosService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antropometricosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAntropometricoDto: UpdateAntropometricoDto,
  ) {
    return this.antropometricosService.update(+id, updateAntropometricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antropometricosService.remove(+id);
  }
}
