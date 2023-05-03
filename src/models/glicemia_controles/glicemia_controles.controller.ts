import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GlicemiaControlesService } from './glicemia_controles.service';
import { CreateGlicemiaControleDto } from './dto/create-glicemia_controle.dto';
import { UpdateGlicemiaControleDto } from './dto/update-glicemia_controle.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Glicemia Controles')
@Controller('glicemia-controles')
export class GlicemiaControlesController {
  constructor(
    private readonly glicemiaControlesService: GlicemiaControlesService,
  ) {}

  @Post()
  create(@Body() createGlicemiaControleDto: CreateGlicemiaControleDto) {
    return this.glicemiaControlesService.create(createGlicemiaControleDto);
  }

  @Get()
  findAll() {
    return this.glicemiaControlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.glicemiaControlesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGlicemiaControleDto: UpdateGlicemiaControleDto,
  ) {
    return this.glicemiaControlesService.update(+id, updateGlicemiaControleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.glicemiaControlesService.remove(+id);
  }
}
