import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.TCP,
      options: {
        port: 1912,
      },
    },
  );
  console.log('=========>');
  console.log('===========>');
  console.log('=============> USERS SERVICE');
  console.log('===========>');
  console.log('=========>');
  await app.listen();
}
bootstrap();
