import { Test, TestingModule } from '@nestjs/testing';
import { SportmenService } from './sportmen.service';

describe('SportmenService', () => {
  let service: SportmenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportmenService],
    }).compile();

    service = module.get<SportmenService>(SportmenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
