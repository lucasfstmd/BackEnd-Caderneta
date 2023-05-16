import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UbsService } from './ubs.service';
import { CreateUbDto } from './dto/create-ub.dto';
import { UpdateUbDto } from './dto/update-ub.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ubs')
@Controller('api/v1/ubs')
export class UbsController {
  constructor(private readonly ubsService: UbsService) {}

  @Post()
  create(@Body() createUbDto: CreateUbDto) {
    return this.ubsService.create(createUbDto);
  }

  @Get()
  findAll() {
    return this.ubsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ubsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUbDto: UpdateUbDto) {
    return this.ubsService.update(+id, updateUbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ubsService.remove(+id);
  }
}
