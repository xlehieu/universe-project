import { Test, TestingModule } from '@nestjs/testing';
import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';

describe('PlanetController', () => {
  let planetController: PlanetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlanetController],
      providers: [PlanetService],
    }).compile();

    planetController = app.get<PlanetController>(PlanetController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(planetController.getHello()).toBe('Hello World!');
    });
  });
});
