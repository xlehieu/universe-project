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
  getSystemWithGalaxy(id: string) {
    return this.systemRepo.findOne({
      where: { id },
      relations: {
        galaxy: true,
      },
    });
  }

  update(id: number, updateSystemDto: UpdateSystemDto) {
    return `This action updates a #${id} system`;
  }

  remove(id: number) {
    return `This action removes a #${id} system`;
  }
}
