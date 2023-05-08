import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SppbsService } from './sppbs.service';
import { CreateSppbDto } from './dto/create-sppb.dto';
import { UpdateSppbDto } from './dto/update-sppb.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sppbs')
@Controller('sppbs')
export class SppbsController {
  constructor(private readonly sppbsService: SppbsService) {}

  @Post()
  create(@Body() createSppbDto: CreateSppbDto) {
    return this.sppbsService.create(createSppbDto);
  }

  @Get()
  findAll() {
    return this.sppbsService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.sppbsService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sppbsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSppbDto: UpdateSppbDto) {
    return this.sppbsService.update(+id, updateSppbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sppbsService.remove(+id);
  }
}
