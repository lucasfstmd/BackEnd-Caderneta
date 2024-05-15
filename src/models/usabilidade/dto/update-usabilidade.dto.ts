import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsabilidadeDto } from './create-usabilidade.dto';
import { IsNumber, IsString } from 'class-validator'

export class UpdateUsabilidadeDto extends PartialType(CreateUsabilidadeDto) {
    @ApiProperty()
    @IsNumber()
    paciente_id: number;

    @ApiProperty()
    @IsNumber()
    p1: number;

    @ApiProperty()
    @IsString()
    p1_0: string;

    @ApiProperty()
    @IsNumber()
    p1_1_1: number;

    @ApiProperty()
    @IsNumber()
    p1_1_2: number;

    @ApiProperty()
    @IsNumber()
    p1_1_3: number;

    @ApiProperty()
    @IsNumber()
    p1_1_4: number;

    @ApiProperty()
    @IsNumber()
    p1_1_5: number;

    @ApiProperty()
    @IsNumber()
    p1_2: number;

    @ApiProperty()
    @IsString()
    p1_3: string;

    @ApiProperty()
    @IsNumber()
    p2_1: number;

    @ApiProperty()
    @IsNumber()
    p2_2: number;

    @ApiProperty()
    @IsNumber()
    p3_1: number;

    @ApiProperty()
    @IsString()
    p3_1_1: string;

    @ApiProperty()
    @IsNumber()
    p3_2: number;

    @ApiProperty()
    @IsString()
    p3_2_1: string;

    @ApiProperty()
    @IsNumber()
    p4_1: number;

    @ApiProperty()
    @IsString()
    p4_1_1: string;
}
