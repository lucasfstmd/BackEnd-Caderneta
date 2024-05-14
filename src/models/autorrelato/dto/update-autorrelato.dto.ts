import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAutorrelatoDto } from './create-autorrelato.dto';
import { IsNumber } from 'class-validator'

export class UpdateAutorrelatoDto extends PartialType(CreateAutorrelatoDto) {
    @ApiProperty()
    @IsNumber()
    paciente_id: number;

    @ApiProperty()
    @IsNumber()
    p1: number
}
