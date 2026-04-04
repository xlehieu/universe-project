import { Injectable } from '@nestjs/common';
import { CreateSystemDto } from './dto/create-system.dto';
import { UpdateSystemDto } from './dto/update-system.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { System } from './entities/system.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SystemsService {
  constructor(
    @InjectRepository(System)
    private systemRepo: Repository<System>,
  ) {}
  create(createSystemDto: CreateSystemDto) {
    const system = this.systemRepo.create(createSystemDto);
    return this.systemRepo.save(system);
  }

  findAll() {
    return this.systemRepo.find();
  }

  findOne(id: string) {
    return this.systemRepo.findOne({
      where: { id },
    });
  }
  getSystemDetail(id: string) {
    return this.systemRepo.findOne({
      where: { id },
      relations: {
        planets: true,
        galaxy: true,
      },
    });
  }

  update(id: string, updateSystemDto: UpdateSystemDto) {
    return this.systemRepo.update(id, updateSystemDto);
  }

  remove(id: string) {
    return this.systemRepo.delete(id);
  }
}
