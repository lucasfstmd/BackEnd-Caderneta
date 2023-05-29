import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ambientais')
export class Ambientais {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paciente_id: number;

  @Column({ nullable: true })
  ano: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p1: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p2: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p3: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p4: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p5: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p6: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p7: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p8: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p9: number;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p10: number;

  @Column({ type: 'tinyint', default: 0, nullable: true })
  p11: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
