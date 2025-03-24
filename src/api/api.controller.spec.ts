import { Test, TestingModule } from '@nestjs/testing';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

describe('ApiController', () => {
  let apiController: ApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [
        {
          provide: ApiService,
          useValue: {
            getWelcome: jest
              .fn()
              .mockReturnValue(
                'A test sentence containing Tennis Masters somewhere in the middle.',
              ),
          },
        },
      ],
    }).compile();

    apiController = module.get<ApiController>(ApiController);
  });

  describe('apiRoute', () => {
    it('should check if return value contains "Tennis Masters" string', () => {
      const result = apiController.getWelcome();
      expect(typeof result).toBe('string');
      expect(result).toContain('Tennis Masters');
    });
  });
});
