import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { FindUsuarioDto } from './dto/find-usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUsuarioNotPasswordDto } from './dto/update-usuario-not-password.dto';

@ApiTags('Usuarios')
@Controller('api/v1/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':usuario')
  finByUsername(@Param('usuario') user: string) {
    const findUsuarioDto: FindUsuarioDto = {
      usuario: user,
    };
    return this.usuariosService.findByUsuario(findUsuarioDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsuarioNotPasswordDto: UpdateUsuarioNotPasswordDto,
  ) {
    return this.usuariosService.update(+id, updateUsuarioNotPasswordDto);
  }

  @Patch('/password/:id')
  updatePassword(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.updatePassword(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
