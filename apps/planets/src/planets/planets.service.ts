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
  async create(createPlanetDto: CreatePlanetDto) {
    const planet = this.planetRepo.create(createPlanetDto);
    console.log('CREATE PLANET', planet);
    return await this.planetRepo.save(planet);
  }

  async findAll() {
    const planets = await this.planetRepo.find();
    return planets;
  }

  findOne(id: string) {
    const planet = this.planetRepo.findOneBy({ id });
    return planet;
  }

  update(id: string, updatePlanetDto: UpdatePlanetDto) {
    const planet = this.planetRepo.update(id, updatePlanetDto);
    return planet;
  }

  async remove(id: string) {
    await this.planetRepo.softDelete(id);
    return true;
  }
}
