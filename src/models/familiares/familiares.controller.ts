import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FamiliaresService } from './familiares.service';
import { CreateFamiliareDto } from './dto/create-familiare.dto';
import { UpdateFamiliareDto } from './dto/update-familiare.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Familiares')
@Controller('familiares')
export class FamiliaresController {
  constructor(private readonly familiaresService: FamiliaresService) {}

  @Post()
  create(@Body() createFamiliareDto: CreateFamiliareDto) {
    return this.familiaresService.create(createFamiliareDto);
  }

  @Get()
  findAll() {
    return this.familiaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familiaresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFamiliareDto: UpdateFamiliareDto,
  ) {
    return this.familiaresService.update(+id, updateFamiliareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.familiaresService.remove(+id);
  }
}
