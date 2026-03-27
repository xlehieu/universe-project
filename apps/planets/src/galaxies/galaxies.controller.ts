import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GalaxiesService } from './galaxies.service';
import { CreateGalaxyDto } from './dto/create-galaxy.dto';
import { UpdateGalaxyDto } from './dto/update-galaxy.dto';

@Controller()
export class GalaxiesController {
  constructor(private readonly galaxiesService: GalaxiesService) {}

  @MessagePattern('galaxy.create')
  create(@Payload() createGalaxyDto: CreateGalaxyDto) {
    return this.galaxiesService.create(createGalaxyDto);
  }

  @MessagePattern('galaxy.findAll')
  findAll() {
    return this.galaxiesService.findAll();
  }

  @MessagePattern('galaxy.findOne')
  findOne(@Payload() id: number) {
    return this.galaxiesService.findOne(id);
  }

  @MessagePattern('galaxy.update')
  update(@Payload() updateGalaxyDto: UpdateGalaxyDto) {
    return this.galaxiesService.update(updateGalaxyDto.id, updateGalaxyDto);
  }

  @MessagePattern('galaxy.remove')
  remove(@Payload() id: number) {
    return this.galaxiesService.remove(id);
  }
}
