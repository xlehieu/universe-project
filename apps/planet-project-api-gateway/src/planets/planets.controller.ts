import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePlanetDto } from 'apps/planets/src/planets/dto/create-planet.dto';

@Controller('planets')
export class PlanetsController {
  constructor(@Inject('PLANETS_CLIENT') private planetsService: ClientProxy) {}

  @Post()
  create(@Body() createPlanetDto: CreatePlanetDto) {
    return this.planetsService.send('planets.create', createPlanetDto);
  }

  @Get()
  findAll() {
    return this.planetsService.send('planets.findAll', {});
  }
  @Get(':id')
  findPlanetDetail(@Param('id') id: string) {
    return this.planetsService.send('planets.findPlanetDetail', id);
  }
}
