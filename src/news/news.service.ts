import { Injectable, HttpService } from '@nestjs/common';
import { News } from './interfaces/news.interface';
import { Response } from './interfaces/response.interface'
import { StoryItem } from './interfaces/storyItem.interface'

@Injectable()
export class NewsService {
  private readonly apiAddress: string = 'https://hacker-news.firebaseio.com/v0'; //move to config?

  constructor(private readonly httpService: HttpService) {}

  private collection: News[] = [];

  create(news): Number {
    this.collection.push(news);
    return this.collection.length - 1;
  }

  async getTopList(): Promise<any> {
    const { data } = await this.httpService.get<Response>('https://hacker-news.firebaseio.com/v0/topstories.json').toPromise();
    return data;
  }

  async getItem(id: Number): Promise<any> {
    let { data } = await this.httpService.get<Response>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).toPromise();
    return data;
  }

  async getRandomTitle() {
    const list: Number[] = await this.getTopList();
    const len = list.length;
    const index = Math.ceil(Math.random() * len);
    const item: StoryItem = await this.getItem(list[index]);
    return item.title;
  }

  findAll(): News[] {
    return this.collection;
  }

  findOne(id): News {
    return this.collection[id];
  }
}
