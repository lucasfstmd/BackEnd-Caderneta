import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { FindUsuarioDto } from './dto/find-usuario.dto';
import { UpdateUsuarioNotPasswordDto } from './dto/update-usuario-not-password.dto';
import { UpdateUsuarioPasswordDto } from './dto/update-usuario-password.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuariosRepository: Repository<Usuario>,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const data: CreateUsuarioDto = {
      ...createUsuarioDto,
      senha: await bcrypt.hash(createUsuarioDto.senha, 10),
    };

    return this.usuariosRepository.save(data);
  }

  findAll() {
    return this.usuariosRepository.find();
  }

  findOne(id: number) {
    return this.usuariosRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateUsuarioNotPasswordDto: UpdateUsuarioNotPasswordDto,
  ) {
    return this.usuariosRepository.update(id, updateUsuarioNotPasswordDto);
  }

  async updatePassword(
    id: number,
    updatePasswordUsuario: UpdateUsuarioPasswordDto,
  ) {
    const findUserById = await this.usuariosRepository.findOne({
      where: { id },
    });

    if (findUserById) {
      const senhaValida = await bcrypt.compare(
        updatePasswordUsuario.currentPassword,
        findUserById.senha,
      );

      if (senhaValida) {
        const data: UpdateUsuarioDto = {
          usuario: findUserById.usuario,
          email: findUserById.email,
          senha: await bcrypt.hash(updatePasswordUsuario.newPassword, 10),
        };

        return this.usuariosRepository.update(id, data);
      } else {
        throw new UnauthorizedException('Senha atual incorreta.');
      }
    } else {
      throw new UnauthorizedException('Usuario não encontrado.');
    }
  }

  remove(id: number) {
    return this.usuariosRepository.delete(id);
  }

  async findByUsuario(findUsuarioDto: FindUsuarioDto): Promise<Usuario | null> {
    const usuario = findUsuarioDto.usuario;
    const foundUsuario = await this.usuariosRepository.findOne({
      where: { usuario },
    });
    return foundUsuario || null;
  }
}
