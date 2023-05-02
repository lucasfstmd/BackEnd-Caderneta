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
  p1: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p2: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p3: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p4: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p5: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p6: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p7: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p8: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p9: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  p10: boolean;

  @Column({ type: 'tinyint', default: 0, nullable: true })
  p11: boolean;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
