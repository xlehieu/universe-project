import { Module } from '@nestjs/common';
import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/planet/.env',
    }),
  ],
  controllers: [PlanetController],
  providers: [PlanetService],
})
export class PlanetModule {}
