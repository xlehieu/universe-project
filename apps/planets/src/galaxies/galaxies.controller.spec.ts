import { Test, TestingModule } from '@nestjs/testing';
import { GalaxiesController } from './galaxies.controller';
import { GalaxiesService } from './galaxies.service';

describe('GalaxiesController', () => {
  let controller: GalaxiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalaxiesController],
      providers: [GalaxiesService],
    }).compile();

    controller = module.get<GalaxiesController>(GalaxiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
