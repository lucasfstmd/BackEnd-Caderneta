import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FrrisquesService } from './frrisques.service';
import { CreateFrrisqueDto } from './dto/create-frrisque.dto';
import { UpdateFrrisqueDto } from './dto/update-frrisque.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Frrisques')
@Controller('frrisques')
export class FrrisquesController {
  constructor(private readonly frrisquesService: FrrisquesService) {}

  @Post()
  create(@Body() createFrrisqueDto: CreateFrrisqueDto) {
    return this.frrisquesService.create(createFrrisqueDto);
  }

  @Get()
  findAll() {
    return this.frrisquesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frrisquesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFrrisqueDto: UpdateFrrisqueDto,
  ) {
    return this.frrisquesService.update(+id, updateFrrisqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frrisquesService.remove(+id);
  }
}
