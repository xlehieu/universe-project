import { Module } from '@nestjs/common';
import { PlanetProjectApiGatewayController } from './planet-project-api-gateway.controller';
import { PlanetProjectApiGatewayService } from './planet-project-api-gateway.service';
import { UsersModule } from './users/users.module';
import { PlanetsModule } from './planets/planets.module';
import { GalaxyModule } from './galaxy/galaxy.module';

@Module({
  imports: [UsersModule, PlanetsModule, GalaxyModule],
  controllers: [PlanetProjectApiGatewayController],
  providers: [PlanetProjectApiGatewayService],
})
export class PlanetProjectApiGatewayModule {}
