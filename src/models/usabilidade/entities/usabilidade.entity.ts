import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('usabilidade')
export class Usabilidade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    paciente_id: number;

    @Column()
    p1: string;

    @Column()
    p1_0: string;

    @Column()
    p1_1_1: string;

    @Column()
    p1_1_2: string;

    @Column()
    p1_1_3: string;

    @Column()
    p1_1_4: string;

    @Column()
    p1_1_5: string;

    @Column()
    p1_2: string;

    @Column()
    p1_3: string;

    @Column()
    p2_1: string;

    @Column()
    p2_2: string;

    @Column()
    p3_1: string;

    @Column()
    p3_1_1: string;

    @Column()
    p3_2: string;

    @Column()
    p3_2_1: string;

    @Column()
    p4_1: string;

    @Column()
    p4_1_1: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
