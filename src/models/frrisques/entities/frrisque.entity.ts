import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('frrisques')
export class Frrisque {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ type: 'tinyint', nullable: true })
  p1: number;

  @Column({ type: 'tinyint', nullable: true })
  p2: number;

  @Column({ type: 'tinyint', nullable: true })
  p3: number;

  @Column({ type: 'tinyint', nullable: true })
  p4: number;

  @Column({ type: 'tinyint', nullable: true })
  p5: number;

  @Column({ type: 'tinyint', nullable: true })
  p6: number;

  @Column({ type: 'tinyint', nullable: true })
  p7: number;

  @Column({ type: 'tinyint', nullable: true })
  p8: number;

  @Column({ type: 'tinyint', nullable: true })
  p9: number;

  @Column({ type: 'tinyint', nullable: true })
  p10: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
