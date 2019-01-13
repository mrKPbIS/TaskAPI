import { Module, HttpModule } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  })],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
