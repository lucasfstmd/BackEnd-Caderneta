import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutorrelatoService } from './autorrelato.service';
import { CreateAutorrelatoDto } from './dto/create-autorrelato.dto';
import { UpdateAutorrelatoDto } from './dto/update-autorrelato.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Autorrelato de Nocturia')
@Controller('api/v1/autorrelato')
export class AutorrelatoController {
  constructor(private readonly autorrelatoService: AutorrelatoService) {}

  @Post()
  create(@Body() createAutorrelatoDto: CreateAutorrelatoDto) {
    return this.autorrelatoService.create(createAutorrelatoDto);
  }

  @Get()
  findAll() {
    return this.autorrelatoService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPatientId(@Param('paciente_id') paciente: number) {
    return this.autorrelatoService.findByPatientId(paciente)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorrelatoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutorrelatoDto: UpdateAutorrelatoDto) {
    return this.autorrelatoService.update(+id, updateAutorrelatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorrelatoService.remove(+id);
  }
}
