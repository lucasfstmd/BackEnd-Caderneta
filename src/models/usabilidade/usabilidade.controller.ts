import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsabilidadeService } from './usabilidade.service';
import { CreateUsabilidadeDto } from './dto/create-usabilidade.dto';
import { UpdateUsabilidadeDto } from './dto/update-usabilidade.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Usabilidade')
@Controller('api/v1/usabilidade')
export class UsabilidadeController {
  constructor(private readonly usabilidadeService: UsabilidadeService) {}

  @Post()
  create(@Body() createUsabilidadeDto: CreateUsabilidadeDto) {
    return this.usabilidadeService.create(createUsabilidadeDto);
  }

  @Get('paciente/:paciente_id')
  findByPatientId(@Param('paciente_id') paciente: number) {
    return this.usabilidadeService.findByPatientId(paciente)
  }

  @Get()
  findAll() {
    return this.usabilidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usabilidadeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsabilidadeDto: UpdateUsabilidadeDto) {
    return this.usabilidadeService.update(+id, updateUsabilidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usabilidadeService.remove(+id);
  }
}
