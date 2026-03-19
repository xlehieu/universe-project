import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlanetsService } from './planets.service';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @MessagePattern('planets.create')
  create(@Payload() createPlanetDto: CreatePlanetDto) {
    return this.planetsService.create(createPlanetDto);
  }

  @MessagePattern('planets.findAll')
  findAll() {
    return this.planetsService.findAll();
  }

  @MessagePattern('planets.findOne')
  findOne(@Payload() id: string) {
    return this.planetsService.findOne(id);
  }

  @MessagePattern('planets.update')
  update(@Payload() updatePlanetDto: UpdatePlanetDto) {
    return this.planetsService.update(updatePlanetDto.id, updatePlanetDto);
  }

  @MessagePattern('planets.remove')
  remove(@Payload() id: string) {
    return this.planetsService.remove(id);
  }
}
