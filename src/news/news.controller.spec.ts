import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { HttpModule } from '@nestjs/common';

describe('News Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [NewsController],
      providers: [NewsService]
    }).compile();
  });


  it('should be defined', () => {
    const controller: NewsController = module.get<NewsController>(NewsController);
    expect(controller).toBeDefined();
  });
});
