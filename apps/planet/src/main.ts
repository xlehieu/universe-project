// import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { PlanetModule } from './planet.module';
// dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(PlanetModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
