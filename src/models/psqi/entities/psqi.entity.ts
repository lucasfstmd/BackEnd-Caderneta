import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('psqi')
export class Psqi {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    paciente_id: number

    @Column()
    p1: string

    @Column()
    p2: string

    @Column()
    p3: string

    @Column()
    p4: string

    @Column()
    p5_a: number

    @Column()
    p5_b: number

    @Column()
    p5_c: number

    @Column()
    p5_d: number

    @Column()
    p5_e: number

    @Column()
    p5_f: number

    @Column()
    p5_g: number

    @Column()
    p5_h: number

    @Column()
    p5_i: string

    @Column()
    p5_j: number

    @Column()
    p6: number

    @Column()
    p7: number

    @Column()
    p8: number

    @Column()
    p9: number

    @Column()
    p10: number

    @Column()
    p10_a: number

    @Column()
    p10_b: number

    @Column()
    p10_c: number

    @Column()
    p10_d: number

    @Column()
    p10_e_1: string

    @Column()
    p10_e_2: number

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}
