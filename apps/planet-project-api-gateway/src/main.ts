import { NestFactory } from '@nestjs/core';
import { PlanetProjectApiGatewayModule } from './planet-project-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(PlanetProjectApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
