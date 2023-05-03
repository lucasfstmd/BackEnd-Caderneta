import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IntensidadesService } from './intensidades.service';
import { CreateIntensidadeDto } from './dto/create-intensidade.dto';
import { UpdateIntensidadeDto } from './dto/update-intensidade.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Intensidades')
@Controller('intensidades')
export class IntensidadesController {
  constructor(private readonly intensidadesService: IntensidadesService) {}

  @Post()
  create(@Body() createIntensidadeDto: CreateIntensidadeDto) {
    return this.intensidadesService.create(createIntensidadeDto);
  }

  @Get()
  findAll() {
    return this.intensidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intensidadesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIntensidadeDto: UpdateIntensidadeDto,
  ) {
    return this.intensidadesService.update(+id, updateIntensidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intensidadesService.remove(+id);
  }
}
