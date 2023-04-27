import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { FindUsuarioDto } from './dto/find-usuario.dto';

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

    await this.usuariosRepository.save(data);

    return {
      ...createUsuarioDto,
      senha: undefined,
    };
  }

  findAll() {
    return this.usuariosRepository.find();
  }

  findOne(id: number) {
    return this.usuariosRepository.findOne({ where: { id } });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosRepository.update(id, updateUsuarioDto);
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
