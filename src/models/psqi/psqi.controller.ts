import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsqiService } from './psqi.service';
import { CreatePsqiDto } from './dto/create-psqi.dto';
import { UpdatePsqiDto } from './dto/update-psqi.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Psqi')
@Controller('api/v1/psqi')
export class PsqiController {
  constructor(private readonly psqiService: PsqiService) {}

  @Post()
  create(@Body() createPsqiDto: CreatePsqiDto) {
    return this.psqiService.create(createPsqiDto);
  }

  @Get()
  findAll() {
    return this.psqiService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPatientId(@Param('paciente_id') paciente: number) {
    return this.psqiService.findByPatientId(paciente)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psqiService.findOne(+id);
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsqiDto: UpdatePsqiDto) {
    return this.psqiService.update(+id, updatePsqiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psqiService.remove(+id);
  }
}
