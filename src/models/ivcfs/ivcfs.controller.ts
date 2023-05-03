import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IvcfsService } from './ivcfs.service';
import { CreateIvcfDto } from './dto/create-ivcf.dto';
import { UpdateIvcfDto } from './dto/update-ivcf.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ivcfs')
@Controller('ivcfs')
export class IvcfsController {
  constructor(private readonly ivcfsService: IvcfsService) {}

  @Post()
  create(@Body() createIvcfDto: CreateIvcfDto) {
    return this.ivcfsService.create(createIvcfDto);
  }

  @Get()
  findAll() {
    return this.ivcfsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ivcfsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIvcfDto: UpdateIvcfDto) {
    return this.ivcfsService.update(+id, updateIvcfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ivcfsService.remove(+id);
  }
}
