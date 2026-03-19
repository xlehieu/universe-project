import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planet } from './entities/planet.entity';
import { Moon } from '../moons/entities/moon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Planet, Moon])],
  controllers: [PlanetsController],
  providers: [PlanetsService],
})
export class PlanetsModule {}
