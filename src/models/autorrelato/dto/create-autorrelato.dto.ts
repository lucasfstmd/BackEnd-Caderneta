import { Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class CreateAutorrelatoDto {
    @ApiProperty()
    @IsNumber()
    paciente_id: number;

    @ApiProperty()
    @IsNumber()
    p1: number
}
