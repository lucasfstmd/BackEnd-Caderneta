import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('antropometricos')
export class Antropometricos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ nullable: true })
  ano: number;

  @Column({ type: 'float', nullable: true })
  peso: number;

  @Column({ type: 'float', nullable: true })
  altura: number;

  @Column({ type: 'float', nullable: true })
  imc: number;

  @Column({ type: 'float', nullable: true })
  perimetro_panturrilha: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
