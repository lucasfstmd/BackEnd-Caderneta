import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BucalSaudesService } from './bucal_saudes.service';
import { CreateBucalSaudeDto } from './dto/create-bucal_saude.dto';
import { UpdateBucalSaudeDto } from './dto/update-bucal_saude.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Bucas Saudes')
@Controller('bucal-saudes')
export class BucalSaudesController {
  constructor(private readonly bucalSaudesService: BucalSaudesService) {}

  @Post()
  create(@Body() createBucalSaudeDto: CreateBucalSaudeDto) {
    return this.bucalSaudesService.create(createBucalSaudeDto);
  }

  @Get()
  findAll() {
    return this.bucalSaudesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bucalSaudesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBucalSaudeDto: UpdateBucalSaudeDto,
  ) {
    return this.bucalSaudesService.update(+id, updateBucalSaudeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bucalSaudesService.remove(+id);
  }
}
