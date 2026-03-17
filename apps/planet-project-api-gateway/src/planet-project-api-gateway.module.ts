import { Module } from '@nestjs/common';
import { PlanetProjectApiGatewayController } from './planet-project-api-gateway.controller';
import { PlanetProjectApiGatewayService } from './planet-project-api-gateway.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [PlanetProjectApiGatewayController],
  providers: [PlanetProjectApiGatewayService],
})
export class PlanetProjectApiGatewayModule {}
