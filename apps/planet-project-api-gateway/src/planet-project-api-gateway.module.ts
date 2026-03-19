import { Module } from '@nestjs/common';
import { PlanetProjectApiGatewayController } from './planet-project-api-gateway.controller';
import { PlanetProjectApiGatewayService } from './planet-project-api-gateway.service';
import { UsersModule } from './users/users.module';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [UsersModule, PlanetsModule],
  controllers: [PlanetProjectApiGatewayController],
  providers: [PlanetProjectApiGatewayService],
})
export class PlanetProjectApiGatewayModule {}
