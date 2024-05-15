import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('usabilidade')
export class Usabilidade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    paciente_id: number;

    @Column({ nullable: true })
    p1: number;

    @Column({ nullable: true })
    p1_0: string;

    @Column({ nullable: true })
    p1_1_1: number;

    @Column({ nullable: true })
    p1_1_2: number;

    @Column({ nullable: true })
    p1_1_3: number;

    @Column({ nullable: true })
    p1_1_4: number;

    @Column({ nullable: true })
    p1_1_5: number;

    @Column({ nullable: true })
    p1_2: number;

    @Column({ nullable: true })
    p1_3: string;

    @Column({ nullable: true })
    p2_1: number;

    @Column({ nullable: true })
    p2_2: number;

    @Column({ nullable: true })
    p3_1: number;

    @Column({ nullable: true })
    p3_1_1: string;

    @Column({ nullable: true })
    p3_2: number;

    @Column({ nullable: true })
    p3_2_1: string;

    @Column({ nullable: true })
    p4_1: number;

    @Column({ nullable: true })
    p4_1_1: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
