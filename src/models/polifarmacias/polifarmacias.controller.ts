import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PolifarmaciasService } from './polifarmacias.service';
import { CreatePolifarmaciaDto } from './dto/create-polifarmacia.dto';
import { UpdatePolifarmaciaDto } from './dto/update-polifarmacia.dto';
import { FindPacienteIdDto } from '../core/dto/find-pacienteId.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Polifarmacisa')
@Controller('polifarmacias')
export class PolifarmaciasController {
  constructor(private readonly polifarmaciasService: PolifarmaciasService) {}

  @Post()
  create(@Body() createPolifarmaciaDto: CreatePolifarmaciaDto) {
    return this.polifarmaciasService.create(createPolifarmaciaDto);
  }

  @Get()
  findAll() {
    return this.polifarmaciasService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPacienteId(@Param('paciente_id') paciente: number) {
    const findPacienteId: FindPacienteIdDto = {
      paciente_id: paciente,
    };
    return this.polifarmaciasService.findByPacienteId(findPacienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.polifarmaciasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePolifarmaciaDto: UpdatePolifarmaciaDto,
  ) {
    return this.polifarmaciasService.update(+id, updatePolifarmaciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.polifarmaciasService.remove(+id);
  }
}
