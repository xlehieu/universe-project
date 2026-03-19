import { Injectable } from '@nestjs/common';
import { CreateMoonDto } from './dto/create-moon.dto';
import { UpdateMoonDto } from './dto/update-moon.dto';

@Injectable()
export class MoonsService {
  create(createMoonDto: CreateMoonDto) {
    return 'This action adds a new moon';
  }

  findAll() {
    return `This action returns all moons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moon`;
  }

  update(id: number, updateMoonDto: UpdateMoonDto) {
    return `This action updates a #${id} moon`;
  }

  remove(id: number) {
    return `This action removes a #${id} moon`;
  }
}
