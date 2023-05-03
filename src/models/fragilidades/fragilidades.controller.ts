import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FragilidadesService } from './fragilidades.service';
import { CreateFragilidadeDto } from './dto/create-fragilidade.dto';
import { UpdateFragilidadeDto } from './dto/update-fragilidade.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Fragilidades')
@Controller('fragilidades')
export class FragilidadesController {
  constructor(private readonly fragilidadesService: FragilidadesService) {}

  @Post()
  create(@Body() createFragilidadeDto: CreateFragilidadeDto) {
    return this.fragilidadesService.create(createFragilidadeDto);
  }

  @Get()
  findAll() {
    return this.fragilidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fragilidadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFragilidadeDto: UpdateFragilidadeDto) {
    return this.fragilidadesService.update(+id, updateFragilidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fragilidadesService.remove(+id);
  }
}
