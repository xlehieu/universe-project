import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Planet } from '../../planets/entities/planet.entity';

@Entity('moons')
export class Moon {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column('float')
  orbital_radius_km!: number;

  @Column('float')
  radius_km!: number;

  @Column({ nullable: true })
  color_hex?: string;

  @Column({ nullable: true })
  texture?: string;

  @Column('uuid')
  planet_id!: string;

  @ManyToOne(() => Planet, (planet) => planet.moons, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'planet_id' })
  planet!: Planet;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
