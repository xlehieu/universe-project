import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Planet } from '../../planets/entities/planet.entity';
import { Galaxy } from '../../galaxies/entities/galaxy.entity';

@Entity()
export class System {
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

  @OneToMany(() => Planet, (planet) => planet.system_id)
  planets!: Planet[];

  @Column('uuid')
  galaxy_id!: string;
  @ManyToOne(() => Galaxy, (galaxy) => galaxy.systems)
  galaxy!: Galaxy;
}
