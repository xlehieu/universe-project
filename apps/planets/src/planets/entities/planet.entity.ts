import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Moon } from '../../moons/entities/moon.entity';
export enum PlanetType {
  TERRESTRIAL = 'terrestrial',
  GAS_GIANT = 'gas_giant',
  ICE_GIANT = 'ice_giant',
  DWARF = 'dwarf',
  SUPER_EARTH = 'super_earth',
  SUB_EARTH = 'sub_earth',
}
@Entity()
export class Planet {
  @PrimaryGeneratedColumn('uuid') // primary key tự gen UUID
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @Column({
    type: 'enum',
    enum: PlanetType,
    default: PlanetType.TERRESTRIAL,
  })
  type!: PlanetType;

  @Column({
    nullable: true,
  })
  texture: string;
  @Column('float')
  position_x!: number;

  @Column('float')
  position_y!: number;

  @Column('float')
  position_z!: number;

  @Column({ default: false })
  rings!: boolean;

  @Column('float', { nullable: true })
  ring_inner_radius_km?: number;

  @Column('float', { nullable: true })
  ring_outer_radius_km?: number;

  @Column({ nullable: true })
  ring_color_hex?: string;

  @Column('uuid')
  solar_system_id!: string;

  @OneToMany(() => Moon, (moon) => moon.planet)
  moons!: Moon[];

  @CreateDateColumn() // tự set khi insert
  created_at!: Date;

  @UpdateDateColumn() // tự set khi update
  updated_at!: Date;

  @DeleteDateColumn() // soft delete
  deleted_at?: Date;
}
