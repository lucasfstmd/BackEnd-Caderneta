import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AmbientaisService } from './ambientais.service';
import { CreateAmbientaiDto } from './dto/create-ambientai.dto';
import { UpdateAmbientaiDto } from './dto/update-ambientai.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Ambientais')
@Controller('api/v1/ambientais')
export class AmbientaisController {
  constructor(private readonly ambientaisService: AmbientaisService) {}

  @Post()
  create(@Body() createAmbientaiDto: CreateAmbientaiDto) {
    return this.ambientaisService.create(createAmbientaiDto);
  }

  @Get()
  findAll() {
    return this.ambientaisService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.ambientaisService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ambientaisService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAmbientaiDto: UpdateAmbientaiDto,
  ) {
    return this.ambientaisService.update(+id, updateAmbientaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ambientaisService.remove(+id);
  }
}
