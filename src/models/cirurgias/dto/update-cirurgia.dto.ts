import { PartialType } from '@nestjs/swagger';
import { CreateCirurgiaDto } from './create-cirurgia.dto';

export class UpdateCirurgiaDto extends PartialType(CreateCirurgiaDto) {}
