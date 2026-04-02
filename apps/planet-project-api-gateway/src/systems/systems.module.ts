import { Module } from '@nestjs/common';
import { SystemsController } from './systems.controller';
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
  controllers: [SystemsController],
})
export class SystemsModule {}
