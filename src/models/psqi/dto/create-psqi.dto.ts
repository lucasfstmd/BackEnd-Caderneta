import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreatePsqiDto {
    @ApiProperty()
    @IsNumber()
    paciente_id: number

    @ApiProperty()
    @IsString()
    p1: string

    @ApiProperty()
    @IsString()
    p2: string

    @ApiProperty()
    @IsString()
    p3: string

    @ApiProperty()
    @IsString()
    p4: string

    @ApiProperty()
    @IsNumber()
    p5_a: number

    @ApiProperty()
    @IsNumber()
    p5_b: number

    @ApiProperty()
    @IsNumber()
    p5_c: number

    @ApiProperty()
    @IsNumber()
    p5_d: number

    @ApiProperty()
    @IsNumber()
    p5_e: number

    @ApiProperty()
    @IsNumber()
    p5_f: number

    @ApiProperty()
    @IsNumber()
    p5_g: number

    @ApiProperty()
    @IsNumber()
    p5_h: number

    @ApiProperty()
    @IsString()
    p5_i: string

    @ApiProperty()
    @IsNumber()
    p5_j: number

    @ApiProperty()
    @IsNumber()
    p6: number

    @ApiProperty()
    @IsNumber()
    p7: number

    @ApiProperty()
    @IsNumber()
    p8: number

    @ApiProperty()
    @IsNumber()
    p9: number

    @ApiProperty()
    @IsNumber()
    p10: number

    @ApiProperty()
    @IsNumber()
    p10_a: number

    @ApiProperty()
    @IsNumber()
    p10_b: number

    @ApiProperty()
    @IsNumber()
    p10_c: number

    @ApiProperty()
    @IsNumber()
    p10_d: number

    @ApiProperty()
    @IsString()
    p10_e_1: string

    @ApiProperty()
    @IsNumber()
    p10_e_2: number

}
