import { Module } from '@nestjs/common';
import { EscalaEstresseService } from './escala-estresse.service';
import { EscalaEstresseController } from './escala-estresse.controller';
import { escalaEstresseProviders } from './escala-estresse.providers'
import { DataBaseModule } from '../../database/dataBaseModule'

@Module({
  imports: [DataBaseModule],
  controllers: [EscalaEstresseController],
  providers: [...escalaEstresseProviders, EscalaEstresseService]
})
export class EscalaEstresseModule {}
