import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PlanetsModule } from './planets/planets.module';
import { GalaxyModule } from './galaxy/galaxy.module';
import { SystemsModule } from './systems/systems.module';

@Module({
  imports: [PlanetsModule, SystemsModule, GalaxyModule, UsersModule],
})
export class PlanetProjectApiGatewayModule {}
