import { NestFactory } from '@nestjs/core';
import { PlanetsAppModule } from './planets-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PlanetsAppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    },
  );
  console.log('=========>');
  console.log('===========>');
  console.log('=============> PLANETS SERVICE');
  console.log('===========>');
  console.log('=========>');
  await app.listen();
}
bootstrap();
