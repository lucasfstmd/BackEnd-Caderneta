import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PreensaoForcasService } from './preensao_forcas.service';
import { CreatePreensaoForcaDto } from './dto/create-preensao_forca.dto';
import { UpdatePreensaoForcaDto } from './dto/update-preensao_forca.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pressao Forcas')
@Controller('api/v1/preensao-forcas')
export class PreensaoForcasController {
  constructor(private readonly preensaoForcasService: PreensaoForcasService) {}

  @Post()
  create(@Body() createPreensaoForcaDto: CreatePreensaoForcaDto) {
    return this.preensaoForcasService.create(createPreensaoForcaDto);
  }

  @Get()
  findAll() {
    return this.preensaoForcasService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.preensaoForcasService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preensaoForcasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePreensaoForcaDto: UpdatePreensaoForcaDto,
  ) {
    return this.preensaoForcasService.update(+id, updatePreensaoForcaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preensaoForcasService.remove(+id);
  }
}
