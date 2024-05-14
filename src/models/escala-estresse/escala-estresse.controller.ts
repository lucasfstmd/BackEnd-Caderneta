import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscalaEstresseService } from './escala-estresse.service';
import { CreateEscalaEstresseDto } from './dto/create-escala-estresse.dto';
import { UpdateEscalaEstresseDto } from './dto/update-escala-estresse.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Escala Estresse')
@Controller('api/v1/escala-estresse')
export class EscalaEstresseController {
  constructor(private readonly escalaEstresseService: EscalaEstresseService) {}

  @Post()
  create(@Body() createEscalaEstresseDto: CreateEscalaEstresseDto) {
    return this.escalaEstresseService.create(createEscalaEstresseDto);
  }

  @Get()
  findAll() {
    return this.escalaEstresseService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPatientId(@Param('paciente_id') paciente: number) {
    return this.escalaEstresseService.findByPatientId(paciente)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escalaEstresseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscalaEstresseDto: UpdateEscalaEstresseDto) {
    return this.escalaEstresseService.update(+id, updateEscalaEstresseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escalaEstresseService.remove(+id);
  }
}
