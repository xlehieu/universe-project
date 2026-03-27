import { Test, TestingModule } from '@nestjs/testing';
import { GalaxiesService } from './galaxies.service';

describe('GalaxiesService', () => {
  let service: GalaxiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GalaxiesService],
    }).compile();

    service = module.get<GalaxiesService>(GalaxiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
