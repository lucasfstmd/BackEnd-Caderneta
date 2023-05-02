import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AntropometricosService } from './antropometricos.service';
import { CreateAntropometricoDto } from './dto/create-antropometrico.dto';
import { UpdateAntropometricoDto } from './dto/update-antropometrico.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Antropometricos')
@Controller('antropometricos')
export class AntropometricosController {
  constructor(
    private readonly antropometricosService: AntropometricosService,
  ) {}

  @Post()
  create(@Body() createAntropometricoDto: CreateAntropometricoDto) {
    return this.antropometricosService.create(createAntropometricoDto);
  }

  @Get()
  findAll() {
    return this.antropometricosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antropometricosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAntropometricoDto: UpdateAntropometricoDto,
  ) {
    return this.antropometricosService.update(+id, updateAntropometricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antropometricosService.remove(+id);
  }
}
