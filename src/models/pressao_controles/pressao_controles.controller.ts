import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PressaoControlesService } from './pressao_controles.service';
import { CreatePressaoControleDto } from './dto/create-pressao_controle.dto';
import { UpdatePressaoControleDto } from './dto/update-pressao_controle.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Pressao Controles')
@Controller('pressao-controles')
export class PressaoControlesController {
  constructor(
    private readonly pressaoControlesService: PressaoControlesService,
  ) {}

  @Post()
  create(@Body() createPressaoControleDto: CreatePressaoControleDto) {
    return this.pressaoControlesService.create(createPressaoControleDto);
  }

  @Get()
  findAll() {
    return this.pressaoControlesService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.pressaoControlesService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pressaoControlesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePressaoControleDto: UpdatePressaoControleDto,
  ) {
    return this.pressaoControlesService.update(+id, updatePressaoControleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pressaoControlesService.remove(+id);
  }
}
