import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PesoPerdasService } from './peso_perdas.service';
import { CreatePesoPerdaDto } from './dto/create-peso_perda.dto';
import { UpdatePesoPerdaDto } from './dto/update-peso_perda.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('PESO-PERDAS')
@Controller('peso-perdas')
export class PesoPerdasController {
  constructor(private readonly pesoPerdasService: PesoPerdasService) {}

  @Post()
  create(@Body() createPesoPerdaDto: CreatePesoPerdaDto) {
    return this.pesoPerdasService.create(createPesoPerdaDto);
  }

  @Get()
  findAll() {
    return this.pesoPerdasService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.pesoPerdasService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pesoPerdasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePesoPerdaDto: UpdatePesoPerdaDto,
  ) {
    return this.pesoPerdasService.update(+id, updatePesoPerdaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pesoPerdasService.remove(+id);
  }
}
