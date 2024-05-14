import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsabilidadeDto } from './create-usabilidade.dto';
import { IsNumber, IsString } from 'class-validator'

export class UpdateUsabilidadeDto extends PartialType(CreateUsabilidadeDto) {
    @ApiProperty()
    @IsNumber()
    paciente_id: number;

    @ApiProperty()
    @IsString()
    p1: string;

    @ApiProperty()
    @IsString()
    p1_0: string;

    @ApiProperty()
    @IsString()
    p1_1_1: string;

    @ApiProperty()
    @IsString()
    p1_1_2: string;

    @ApiProperty()
    @IsString()
    p1_1_3: string;

    @ApiProperty()
    @IsString()
    p1_1_4: string;

    @ApiProperty()
    @IsString()
    p1_1_5: string;

    @ApiProperty()
    @IsString()
    p1_2: string;

    @ApiProperty()
    @IsString()
    p1_3: string;

    @ApiProperty()
    @IsString()
    p2_1: string;

    @ApiProperty()
    @IsString()
    p2_2: string;

    @ApiProperty()
    @IsString()
    p3_1: string;

    @ApiProperty()
    @IsString()
    p3_1_1: string;

    @ApiProperty()
    @IsString()
    p3_2: string;

    @ApiProperty()
    @IsString()
    p3_2_1: string;

    @ApiProperty()
    @IsString()
    p4_1: string;

    @ApiProperty()
    @IsString()
    p4_1_1: string;
}
