import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EseService } from './ese.service';
import { CreateEseDto } from './dto/create-ese.dto';
import { UpdateEseDto } from './dto/update-ese.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Ese')
@Controller('api/v1/ese')
export class EseController {
  constructor(private readonly eseService: EseService) {}

  @Post()
  create(@Body() createEseDto: CreateEseDto) {
    return this.eseService.create(createEseDto);
  }

  @Get()
  findAll() {
    return this.eseService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPatientId(@Param('paciente_id') paciente: number) {
    return this.eseService.findByPatientId(paciente)
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEseDto: UpdateEseDto) {
    return this.eseService.update(+id, updateEseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eseService.remove(+id);
  }
}
