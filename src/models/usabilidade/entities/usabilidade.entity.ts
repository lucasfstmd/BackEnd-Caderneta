import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('usabilidade')
export class Usabilidade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    paciente_id: number;

    @Column()
    p1: number;

    @Column()
    p1_0: string;

    @Column()
    p1_1_1: number;

    @Column()
    p1_1_2: number;

    @Column()
    p1_1_3: number;

    @Column()
    p1_1_4: number;

    @Column()
    p1_1_5: number;

    @Column()
    p1_2: number;

    @Column()
    p1_3: number;

    @Column()
    p2_1: number;

    @Column()
    p2_2: number;

    @Column()
    p3_1: number;

    @Column()
    p3_1_1: number;

    @Column()
    p3_2: number;

    @Column()
    p3_2_1: number;

    @Column()
    p4_1: number;

    @Column()
    p4_1_1: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
