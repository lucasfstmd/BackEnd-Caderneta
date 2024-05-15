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
    p1_b_h: string

    @ApiProperty()
    @IsString()
    p1_b_m: string

    @ApiProperty()
    @IsString()
    p2_a: string

    @ApiProperty()
    @IsString()
    p2_b_h: string

    @ApiProperty()
    @IsString()
    p2_b_m: string

    @ApiProperty()
    @IsString()
    p3_a: string

    @ApiProperty()
    @IsString()
    p3_b_h: string

    @ApiProperty()
    @IsString()
    p3_b_m: string

    @ApiProperty()
    @IsString()
    p4_a_h: string

    @ApiProperty()
    @IsString()
    p4_a_m: string

    @ApiProperty()
    @IsString()
    p4_b_h: string

    @ApiProperty()
    @IsString()
    p4_b_m: string
}
