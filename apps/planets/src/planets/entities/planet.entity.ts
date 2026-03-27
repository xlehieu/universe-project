import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Moon } from '../../moons/entities/moon.entity';
import { System } from '../../systems/entities/system.entity';
export enum PlanetType {
  TERRESTRIAL = 'terrestrial', // hành tinh đất đá
  GAS_GIANT = 'gas_giant', // hành tinh khí
  ICE_GIANT = 'ice_giant', // hành tinh băng
  DWARF = 'dwarf', // hành tinh lùn
  SUPER_EARTH = 'super_earth', // siêu trái đất
  SUB_EARTH = 'sub_earth', // hành tinh nhỏ hơn trái đất
}
@Entity()
export class Planet {
  @PrimaryGeneratedColumn('uuid') // primary key tự gen UUID
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description: string;

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

  @OneToMany(() => Moon, (moon) => moon.planet)
  moons!: Moon[];

  @Column('uuid')
  system_id!: string;

  @ManyToOne(() => System, (planet) => planet.planets, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'system_id' })
  system!: Planet;

  @CreateDateColumn() // tự set khi insert
  created_at!: Date;

  @UpdateDateColumn() // tự set khi update
  updated_at!: Date;

  @DeleteDateColumn() // soft delete
  deleted_at?: Date;
}
