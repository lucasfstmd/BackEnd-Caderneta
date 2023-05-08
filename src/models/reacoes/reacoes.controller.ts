import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReacoesService } from './reacoes.service';
import { CreateReacoeDto } from './dto/create-reacoe.dto';
import { UpdateReacoeDto } from './dto/update-reacoe.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Reacoes')
@Controller('reacoes')
export class ReacoesController {
  constructor(private readonly reacoesService: ReacoesService) {}

  @Post()
  create(@Body() createReacoeDto: CreateReacoeDto) {
    return this.reacoesService.create(createReacoeDto);
  }

  @Get()
  findAll() {
    return this.reacoesService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.reacoesService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reacoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReacoeDto: UpdateReacoeDto) {
    return this.reacoesService.update(+id, updateReacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reacoesService.remove(+id);
  }
}
