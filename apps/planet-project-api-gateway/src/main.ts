import { NestFactory } from '@nestjs/core';
import { PlanetProjectApiGatewayModule } from './planet-project-api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(PlanetProjectApiGatewayModule);
  const config = new DocumentBuilder()
    .setTitle('Planet Project API')
    .setDescription('API documentation for Planet Project')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  console.log('=========>');
  console.log('===========>');
  console.log('=============> API GATEWAY SERVICE');
  console.log('===========>');
  console.log('=========>');
  await app.listen(3000);
}
bootstrap();
