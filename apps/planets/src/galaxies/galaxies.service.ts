import { Injectable } from '@nestjs/common';
import { CreateGalaxyDto } from './dto/create-galaxy.dto';
import { UpdateGalaxyDto } from './dto/update-galaxy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Galaxy } from './entities/galaxy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GalaxiesService {
  constructor(
    @InjectRepository(Galaxy)
    private galaxyRepo: Repository<Galaxy>,
  ) {}
  create(createGalaxyDto: CreateGalaxyDto) {
    const galaxy = this.galaxyRepo.create(createGalaxyDto);
    return this.galaxyRepo.save(galaxy);
  }

  findAll() {
    const galaxies = this.galaxyRepo.find();
    return galaxies;
  }

  findOne(id: string) {
    return this.galaxyRepo.findOneBy({ id });
  }

  update(id: string, updateGalaxyDto: UpdateGalaxyDto) {
    return this.galaxyRepo.update(id, updateGalaxyDto);
  }

  remove(id: string) {
    return this.galaxyRepo.delete(id);
  }
}
