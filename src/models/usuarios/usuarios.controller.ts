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
import { UpdateUsuarioNotPasswordDto } from './dto/update-usuario-not-password.dto';
import { UpdateUsuarioPasswordDto } from './dto/update-usuario-password.dto';
import { UserTypes } from './enum/user-types.enum';
import { Roles } from '../../decorators/roles.decorator';

@ApiTags('Usuarios')
@Controller('api/v1/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Roles(UserTypes.Admin)
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Roles(UserTypes.User, UserTypes.Admin)
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Roles(UserTypes.User, UserTypes.Admin)
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

  @Roles(UserTypes.User, UserTypes.Admin)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsuarioNotPasswordDto: UpdateUsuarioNotPasswordDto,
  ) {
    return this.usuariosService.update(+id, updateUsuarioNotPasswordDto);
  }

  @Roles(UserTypes.User, UserTypes.Admin)
  @Patch('/password/:id')
  updatePassword(
    @Param('id') id: string,
    @Body() updateUsuarioPasswordDto: UpdateUsuarioPasswordDto,
  ) {
    return this.usuariosService.updatePassword(+id, updateUsuarioPasswordDto);
  }

  @Roles(UserTypes.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
