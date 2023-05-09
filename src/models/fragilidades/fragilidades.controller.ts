import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FragilidadesService } from './fragilidades.service';
import { CreateFragilidadeDto } from './dto/create-fragilidade.dto';
import { UpdateFragilidadeDto } from './dto/update-fragilidade.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';

@ApiTags('Fragilidades')
@Controller('api/v1/fragilidades')
export class FragilidadesController {
  constructor(private readonly fragilidadesService: FragilidadesService) {}

  @Post()
  create(@Body() createFragilidadeDto: CreateFragilidadeDto) {
    return this.fragilidadesService.create(createFragilidadeDto);
  }

  @Get()
  findAll() {
    return this.fragilidadesService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.fragilidadesService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fragilidadesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFragilidadeDto: UpdateFragilidadeDto,
  ) {
    return this.fragilidadesService.update(+id, updateFragilidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fragilidadesService.remove(+id);
  }
}
