import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './interfaces/news.interface';

@Controller('news')
export class NewsController {

    constructor(private readonly newsService: NewsService) {}
    
    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() news: News) {
        return this.newsService.create(news);
    }

    @Get('list')
    getTopList() {
        return this.newsService.getTopList();
    }

    @Get('list')
    getItem(@Param('id') id) {
        return this.newsService.getItem(id);
    }

    @Get('title')
    getTitle() {
        return this.newsService.getRandomTitle();
    }

    @Get()
    findAll() {
        return this.newsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.newsService.findOne(id);
    }

}
