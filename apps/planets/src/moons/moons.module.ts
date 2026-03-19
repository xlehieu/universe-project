import { Module } from '@nestjs/common';
import { MoonsService } from './moons.service';
import { MoonsController } from './moons.controller';

@Module({
  controllers: [MoonsController],
  providers: [MoonsService],
})
export class MoonsModule {}
