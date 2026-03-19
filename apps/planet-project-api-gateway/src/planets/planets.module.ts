import { Module } from '@nestjs/common';
import { PlanetsController } from './planets.controller';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PLANETS_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [PlanetsController],
  providers: [],
})
export class PlanetsModule {}
