import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnsiedadeService } from './ansiedade.service';
import { CreateAnsiedadeDto } from './dto/create-ansiedade.dto';
import { UpdateAnsiedadeDto } from './dto/update-ansiedade.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Ansiedade')
@Controller('api/v1/ansiedade')
export class AnsiedadeController {
  constructor(private readonly ansiedadeService: AnsiedadeService) {}

  @Post()
  create(@Body() createAnsiedadeDto: CreateAnsiedadeDto) {
    return this.ansiedadeService.create(createAnsiedadeDto);
  }

  @Get('paciente/:paciente_id')
  findByPatientId(@Param('paciente_id') paciente: number) {
    return this.ansiedadeService.findByPatientId(paciente)
  }
  @Get()
  findAll() {
    return this.ansiedadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ansiedadeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnsiedadeDto: UpdateAnsiedadeDto) {
    return this.ansiedadeService.update(+id, updateAnsiedadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ansiedadeService.remove(+id);
  }
}
