import { Test, TestingModule } from '@nestjs/testing';
import { MoonsController } from './moons.controller';
import { MoonsService } from './moons.service';

describe('MoonsController', () => {
  let controller: MoonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoonsController],
      providers: [MoonsService],
    }).compile();

    controller = module.get<MoonsController>(MoonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
