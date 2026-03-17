import { Controller, Get } from '@nestjs/common';
import { PlanetService } from './planet.service';

@Controller()
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @Get()
  getHello(): string {
    return this.planetService.getHello();
  }
}
