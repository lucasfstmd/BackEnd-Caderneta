import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sppbs')
export class Sppb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  paciente_id: number;

  @Column({ length: 250, nullable: true })
  p1: string;

  @Column({ length: 250, nullable: true })
  p2: string;

  @Column({ length: 250, nullable: true })
  p3: string;

  @Column({ length: 250, nullable: true })
  p4: string;

  @Column({ length: 250, nullable: true })
  p5: string;

  @Column({ length: 250, nullable: true })
  p6: string;

  @Column({ length: 250, nullable: true })
  p7: string;

  @Column({ length: 250, nullable: true })
  p8: string;

  @Column({ length: 250, nullable: true })
  p9: string;

  @Column({ length: 250, nullable: true })
  p10: string;

  @Column({ length: 250, nullable: true })
  p11: string;

  @Column({ length: 250, nullable: true })
  p12: string;

  @Column({ length: 250, nullable: true })
  p13: string;

  @Column({ length: 250, nullable: true })
  p14: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
