import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('ipaq')
export class Ipaq {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    paciente_id: number;

    @Column()
    p1_a: string

    @Column()
    p1_b_h: string

    @Column()
    p1_b_m: string

    @Column()
    p2_a: string

    @Column()
    p2_b_h: string

    @Column()
    p2_b_m: string

    @Column()
    p3_a: string

    @Column()
    p3_b_h: string

    @Column()
    p3_b_m: string

    @Column()
    p4_a_h: string

    @Column()
    p4_a_m: string

    @Column()
    p4_b_h: string

    @Column()
    p4_b_m: string

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
