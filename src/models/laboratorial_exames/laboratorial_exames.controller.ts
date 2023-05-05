import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LaboratorialExamesService } from './laboratorial_exames.service';
import { CreateLaboratorialExameDto } from './dto/create-laboratorial_exame.dto';
import { UpdateLaboratorialExameDto } from './dto/update-laboratorial_exame.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Laboratorial-Exames')
@Controller('laboratorial-exames')
export class LaboratorialExamesController {
  constructor(
    private readonly laboratorialExamesService: LaboratorialExamesService,
  ) {}

  @Post()
  create(@Body() createLaboratorialExameDto: CreateLaboratorialExameDto) {
    return this.laboratorialExamesService.create(createLaboratorialExameDto);
  }

  @Get()
  findAll() {
    return this.laboratorialExamesService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.laboratorialExamesService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laboratorialExamesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLaboratorialExameDto: UpdateLaboratorialExameDto,
  ) {
    return this.laboratorialExamesService.update(
      +id,
      updateLaboratorialExameDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laboratorialExamesService.remove(+id);
  }
}
