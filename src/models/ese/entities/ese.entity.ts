import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('ese')
export class Ese {
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

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
