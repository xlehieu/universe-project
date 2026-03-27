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

  findOne(id: number) {
    return `This action returns a #${id} galaxy`;
  }

  update(id: number, updateGalaxyDto: UpdateGalaxyDto) {
    return `This action updates a #${id} galaxy`;
  }

  remove(id: number) {
    return `This action removes a #${id} galaxy`;
  }
}
