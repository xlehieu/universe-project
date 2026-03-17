import { Injectable } from '@nestjs/common';

@Injectable()
export class PlanetProjectApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
