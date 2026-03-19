import { Test, TestingModule } from '@nestjs/testing';
import { MoonsService } from './moons.service';

describe('MoonsService', () => {
  let service: MoonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoonsService],
    }).compile();

    service = module.get<MoonsService>(MoonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
