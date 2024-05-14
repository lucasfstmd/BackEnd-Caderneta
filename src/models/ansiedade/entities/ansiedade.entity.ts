import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('ansiedade')
export class Ansiedade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    paciente_id: number;

    @Column()
    p1: number

    @Column()
    p2: number

    @Column()
    p3: number

    @Column()
    p4: number

    @Column()
    p5: number

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
    p11: number

    @Column()
    p12: number

    @Column()
    p13: number

    @Column()
    p14: number

    @Column()
    p15: number

    @Column()
    p16: number

    @Column()
    p17: number

    @Column()
    p18: number

    @Column()
    p19: number

    @Column()
    p20: number

    @Column()
    score: number

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
