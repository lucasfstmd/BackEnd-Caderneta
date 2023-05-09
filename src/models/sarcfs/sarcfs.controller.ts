import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SarcfsService } from './sarcfs.service';
import { CreateSarcfDto } from './dto/create-sarcf.dto';
import { UpdateSarcfDto } from './dto/update-sarcf.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sarcfs')
@Controller('api/v1/sarcfs')
export class SarcfsController {
  constructor(private readonly sarcfsService: SarcfsService) {}

  @Post()
  create(@Body() createSarcfDto: CreateSarcfDto) {
    return this.sarcfsService.create(createSarcfDto);
  }

  @Get()
  findAll() {
    return this.sarcfsService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.sarcfsService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sarcfsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSarcfDto: UpdateSarcfDto) {
    return this.sarcfsService.update(+id, updateSarcfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sarcfsService.remove(+id);
  }
}
