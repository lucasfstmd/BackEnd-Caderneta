import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CirurgiasService } from './cirurgias.service';
import { CreateCirurgiaDto } from './dto/create-cirurgia.dto';
import { UpdateCirurgiaDto } from './dto/update-cirurgia.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cirurgias')
@Controller('cirurgias')
export class CirurgiasController {
  constructor(private readonly cirurgiasService: CirurgiasService) {}

  @Post()
  create(@Body() createCirurgiaDto: CreateCirurgiaDto) {
    return this.cirurgiasService.create(createCirurgiaDto);
  }

  @Get()
  findAll() {
    return this.cirurgiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cirurgiasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCirurgiaDto: UpdateCirurgiaDto,
  ) {
    return this.cirurgiasService.update(+id, updateCirurgiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cirurgiasService.remove(+id);
  }
}
