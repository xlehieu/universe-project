import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlanetService } from './planet.service';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';

@Controller()
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @MessagePattern('planet.createPlanet')
  create(@Payload() createPlanetDto: CreatePlanetDto) {
    return this.planetService.create(createPlanetDto);
  }

  @MessagePattern('planet.findAllPlanet')
  findAll() {
    return this.planetService.findAll();
  }

  @MessagePattern('planet.findOnePlanet')
  findOne(@Payload() id: number) {
    return this.planetService.findOne(id);
  }

  @MessagePattern('planet.updatePlanet')
  update(@Payload() updatePlanetDto: UpdatePlanetDto) {
    return this.planetService.update(updatePlanetDto.id, updatePlanetDto);
  }

  @MessagePattern('planet.removePlanet')
  remove(@Payload() id: number) {
    return this.planetService.remove(id);
  }
}
