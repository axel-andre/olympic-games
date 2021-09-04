import { Test, TestingModule } from '@nestjs/testing';
import { SportmensController } from './sportmen.controller';

describe('SportmensController', () => {
  let controller: SportmensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportmensController],
    }).compile();

    controller = module.get<SportmensController>(SportmensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
