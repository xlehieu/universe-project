import { Injectable } from '@nestjs/common';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Planet } from './entities/planet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlanetsService {
  constructor(
    @InjectRepository(Planet)
    private planetRepo: Repository<Planet>,
  ) {}
  create(createPlanetDto: CreatePlanetDto) {
    const planet = this.planetRepo.create(createPlanetDto);
    return this.planetRepo.save(planet);
  }

  findAll() {
    return this.planetRepo.find();
  }

  findOne(id: string) {
    const planet = this.planetRepo.findOneBy({ id });

    return planet;
  }
  findPlanetDetail(id: string) {
    return this.planetRepo.findOne({
      where: { id },
      relations: {
        moons: true,
        system: {
          galaxy: true,
        },
      },
    });
  }
  update(id: string, updatePlanetDto: UpdatePlanetDto) {
    return this.planetRepo.update(id, updatePlanetDto);
  }

  remove(id: string) {
    return this.planetRepo.softDelete(id);
  }
}
