import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreateIpaqDto {
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
