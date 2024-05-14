import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IpaqService } from './ipaq.service';
import { CreateIpaqDto } from './dto/create-ipaq.dto';
import { UpdateIpaqDto } from './dto/update-ipaq.dto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Ipaq')
@Controller('api/v1/ipaq')
export class IpaqController {
  constructor(private readonly ipaqService: IpaqService) {}

  @Post()
  create(@Body() createIpaqDto: CreateIpaqDto) {
    return this.ipaqService.create(createIpaqDto);
  }

  @Get()
  findAll() {
    return this.ipaqService.findAll();
  }

  @Get('paciente/:paciente_id')
  findByPatientId(@Param('paciente_id') paciente: number) {
    return this.ipaqService.findByPatientId(paciente)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ipaqService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIpaqDto: UpdateIpaqDto) {
    return this.ipaqService.update(+id, updateIpaqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ipaqService.remove(+id);
  }
}
