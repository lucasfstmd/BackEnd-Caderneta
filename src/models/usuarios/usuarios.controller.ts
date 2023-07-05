import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { FindUsuarioDto } from './dto/find-usuario.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserTypes } from './enum/user-types.enum';
import { Roles } from '../../decorators/roles.decorator';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@ApiTags('Usuarios')
@Controller('api/v1/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Roles(UserTypes.Admin)
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

  @Roles(UserTypes.User, UserTypes.Admin)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
