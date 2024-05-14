import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('autorrelato')
export class Autorrelato {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    paciente_id: number;

    @Column()
    p1: number

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
