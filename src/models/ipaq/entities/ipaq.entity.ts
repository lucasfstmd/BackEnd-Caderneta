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
    p1_b: string

    @Column()
    p2_a: string

    @Column()
    p2_b: string

    @Column()
    p3_a: string

    @Column()
    p3_b: string

    @Column()
    p4_a: string

    @Column()
    p4_b: string

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
