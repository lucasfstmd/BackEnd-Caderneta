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
  p1: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p2: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p3: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p4: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p5: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p6: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p7: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p8: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p9: boolean;

  @Column({ type: 'tinyint', nullable: true })
  p10: boolean;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
