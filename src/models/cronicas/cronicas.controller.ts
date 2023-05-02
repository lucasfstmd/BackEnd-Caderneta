import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CronicasService } from './cronicas.service';
import { CreateCronicaDto } from './dto/create-cronica.dto';
import { UpdateCronicaDto } from './dto/update-cronica.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cronicas')
@Controller('cronicas')
export class CronicasController {
  constructor(private readonly cronicasService: CronicasService) {}

  @Post()
  create(@Body() createCronicaDto: CreateCronicaDto) {
    return this.cronicasService.create(createCronicaDto);
  }

  @Get()
  findAll() {
    return this.cronicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cronicasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCronicaDto: UpdateCronicaDto) {
    return this.cronicasService.update(+id, updateCronicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cronicasService.remove(+id);
  }
}
