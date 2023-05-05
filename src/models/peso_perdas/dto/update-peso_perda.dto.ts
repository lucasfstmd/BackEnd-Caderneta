import { PartialType } from '@nestjs/swagger';
import { CreatePesoPerdaDto } from './create-peso_perda.dto';

export class UpdatePesoPerdaDto extends PartialType(CreatePesoPerdaDto) {}
