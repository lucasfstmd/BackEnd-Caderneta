import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuariosRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosRepository.save(createUsuarioDto);
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
}
