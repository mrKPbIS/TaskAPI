import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { HttpModule, HttpService } from '@nestjs/common';

describe('News Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [NewsController],
      providers: [NewsService],
    }).compile();
  });

  it('should be defined', () => {
    const controller: NewsController = module.get<NewsController>(
      NewsController,
    );
    expect(controller).toBeDefined();
  });

  it('title', async () => {
    const service: NewsService = module.get<NewsService>(NewsService);
    const controller: NewsController = module.get<NewsController>(
      NewsController
    );
    const topList: Number[] = [0];
    const items = [
      {
        title: 'first',
      },
    ];
    jest.spyOn(service, 'getTopList').mockImplementation(() => topList);
    jest.spyOn(service, 'getItem').mockImplementation((id) => items[id]);
    expect.assertions(1);
    return await expect(controller.getTitle()).resolves.toBe('first');
  });
});
