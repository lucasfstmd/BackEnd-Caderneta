import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('escala-estresse')
export class EscalaEstresse {
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
    score: number

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

}
