import { Module } from '@nestjs/common';
import { GalaxyController } from './galaxy.controller';
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
  controllers: [GalaxyController],
})
export class GalaxyModule {}
