import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiagnosticosService } from './diagnosticos.service';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Diagnosticos')
@Controller('diagnosticos')
export class DiagnosticosController {
  constructor(private readonly diagnosticosService: DiagnosticosService) {}

  @Post()
  create(@Body() createDiagnosticoDto: CreateDiagnosticoDto) {
    return this.diagnosticosService.create(createDiagnosticoDto);
  }

  @Get()
  findAll() {
    return this.diagnosticosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosticosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiagnosticoDto: UpdateDiagnosticoDto,
  ) {
    return this.diagnosticosService.update(+id, updateDiagnosticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosticosService.remove(+id);
  }
}
