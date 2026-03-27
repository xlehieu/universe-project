import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { System } from '../../systems/entities/system.entity';

@Entity()
export class Galaxy {
  @PrimaryGeneratedColumn('uuid') // primary key tự gen UUID
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column()
  description!: string;

  @Column('float')
  position_x!: number;

  @Column('float')
  position_y!: number;

  @Column('float')
  position_z!: number;

  @OneToMany(() => System, (system) => system.galaxy_id)
  systems: System[];
}
