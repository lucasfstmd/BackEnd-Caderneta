import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateIpaqDto } from './create-ipaq.dto';
import { IsNumber, IsString } from 'class-validator'

export class UpdateIpaqDto extends PartialType(CreateIpaqDto) {
    @ApiProperty()
    @IsNumber()
    paciente_id: number

    @ApiProperty()
    @IsString()
    p1_a: string

    @ApiProperty()
    @IsString()
    p1_b: string

    @ApiProperty()
    @IsString()
    p2_a: string

    @ApiProperty()
    @IsString()
    p2_b: string

    @ApiProperty()
    @IsString()
    p3_a: string

    @ApiProperty()
    @IsString()
    p3_b: string

    @ApiProperty()
    @IsString()
    p4_a: string

    @ApiProperty()
    @IsString()
    p4_b: string
}
