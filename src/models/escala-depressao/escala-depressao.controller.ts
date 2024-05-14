import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscalaDepressaoService } from './escala-depressao.service';
import { CreateEscalaDepressaoDto } from './dto/create-escala-depressao.dto';
import { UpdateEscalaDepressaoDto } from './dto/update-escala-depressao.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Escala Depressão')
@Controller('api/v1/escala-depressao')
export class EscalaDepressaoController {
  constructor(private readonly escalaDepressaoService: EscalaDepressaoService) {}

  @Post()
  create(@Body() createEscalaDepressaoDto: CreateEscalaDepressaoDto) {
    return this.escalaDepressaoService.create(createEscalaDepressaoDto);
  }

  @Get()
  findAll() {
    return this.escalaDepressaoService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPatientId(@Param('paciente_id') paciente: number) {
    return this.escalaDepressaoService.findByPatientId(paciente)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escalaDepressaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscalaDepressaoDto: UpdateEscalaDepressaoDto) {
    return this.escalaDepressaoService.update(+id, updateEscalaDepressaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escalaDepressaoService.remove(+id);
  }
}
