import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AvaliacoesService } from './avaliacoes.service';
import { CreateAvaliacoeDto } from './dto/create-avaliacoe.dto';
import { UpdateAvaliacoeDto } from './dto/update-avaliacoe.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Avaliacoes')
@Controller('avaliacoes')
export class AvaliacoesController {
  constructor(private readonly avaliacoesService: AvaliacoesService) {}

  @Post()
  create(@Body() createAvaliacoeDto: CreateAvaliacoeDto) {
    return this.avaliacoesService.create(createAvaliacoeDto);
  }

  @Get()
  findAll() {
    return this.avaliacoesService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.avaliacoesService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAvaliacoeDto: UpdateAvaliacoeDto,
  ) {
    return this.avaliacoesService.update(+id, updateAvaliacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacoesService.remove(+id);
  }
}
