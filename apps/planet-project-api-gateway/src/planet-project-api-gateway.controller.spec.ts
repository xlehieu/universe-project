import { Test, TestingModule } from '@nestjs/testing';
import { PlanetProjectApiGatewayController } from './planet-project-api-gateway.controller';
import { PlanetProjectApiGatewayService } from './planet-project-api-gateway.service';

describe('PlanetProjectApiGatewayController', () => {
  let planetProjectApiGatewayController: PlanetProjectApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlanetProjectApiGatewayController],
      providers: [PlanetProjectApiGatewayService],
    }).compile();

    planetProjectApiGatewayController = app.get<PlanetProjectApiGatewayController>(PlanetProjectApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(planetProjectApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
