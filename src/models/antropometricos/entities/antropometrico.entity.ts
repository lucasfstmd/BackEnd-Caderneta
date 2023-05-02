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

  @Column({ nullable: true })
  peso: number;

  @Column({ nullable: true })
  altura: number;

  @Column({ nullable: true })
  imc: number;

  @Column({ nullable: true, name: 'perimetro_panturrilha' })
  perimetroPanturrilha: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
