import { Controller, Get } from '@nestjs/common';
import { PlanetProjectApiGatewayService } from './planet-project-api-gateway.service';

@Controller()
export class PlanetProjectApiGatewayController {
  constructor(private readonly planetProjectApiGatewayService: PlanetProjectApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.planetProjectApiGatewayService.getHello();
  }
}
