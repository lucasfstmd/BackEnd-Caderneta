import { Module } from '@nestjs/common';
import { IpaqService } from './ipaq.service';
import { IpaqController } from './ipaq.controller';
import { DataBaseModule } from '../../database/dataBaseModule'
import { ipaqProviders } from './ipaq.providers'

@Module({
  imports: [DataBaseModule],
  controllers: [IpaqController],
  providers: [...ipaqProviders, IpaqService]
})
export class IpaqModule {}
