import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ComplementaresService } from './complementares.service';
import { CreateComplementareDto } from './dto/create-complementare.dto';
import { UpdateComplementareDto } from './dto/update-complementare.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Complementares')
@Controller('api/v1/complementares')
export class ComplementaresController {
  constructor(private readonly complementaresService: ComplementaresService) {}

  @Post()
  create(@Body() createComplementareDto: CreateComplementareDto) {
    return this.complementaresService.create(createComplementareDto);
  }

  @Get()
  findAll() {
    return this.complementaresService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.complementaresService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complementaresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComplementareDto: UpdateComplementareDto,
  ) {
    return this.complementaresService.update(+id, updateComplementareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complementaresService.remove(+id);
  }
}
