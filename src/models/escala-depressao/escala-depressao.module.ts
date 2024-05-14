import { Module } from '@nestjs/common';
import { EscalaDepressaoService } from './escala-depressao.service';
import { EscalaDepressaoController } from './escala-depressao.controller';
import { DataBaseModule } from '../../database/dataBaseModule'
import { escalaDepressaoProviders } from './escala-depressao.providers'

@Module({
  imports: [DataBaseModule],
  controllers: [EscalaDepressaoController],
  providers: [...escalaDepressaoProviders, EscalaDepressaoService]
})
export class EscalaDepressaoModule {}
