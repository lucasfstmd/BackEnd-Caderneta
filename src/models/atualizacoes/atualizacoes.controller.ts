import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AtualizacoesService } from './atualizacoes.service';
import { CreateAtualizacoeDto } from './dto/create-atualizacoe.dto';
import { UpdateAtualizacoeDto } from './dto/update-atualizacoe.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Atualizacoes')
@Controller('api/v1/atualizacoes')
export class AtualizacoesController {
  constructor(private readonly atualizacoesService: AtualizacoesService) {}

  @Post()
  create(@Body() createAtualizacoeDto: CreateAtualizacoeDto) {
    return this.atualizacoesService.create(createAtualizacoeDto);
  }

  @Get()
  findAll() {
    return this.atualizacoesService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.atualizacoesService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atualizacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAtualizacoeDto: UpdateAtualizacoeDto,
  ) {
    return this.atualizacoesService.update(+id, updateAtualizacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atualizacoesService.remove(+id);
  }
}
