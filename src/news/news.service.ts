import { Injectable, HttpService } from '@nestjs/common';
import { News } from './interfaces/news.interface';
import {Observable} from 'rxjs';

@Injectable()
export class NewsService {
  private readonly apiAddress: string = 'https://hacker-news.firebaseio.com/v0'; //move to config?

  constructor(private readonly httpService: HttpService) {}

  private collection: News[] = [];

  create(news): Number {
    this.collection.push(news);
    return this.collection.length - 1;
  }

  async getTopList() {
    let { data } = await this.httpService.get('https://hacker-news.firebaseio.com/v0/topstories.json').toPromise();
    return data;
  }

  async getItem(id: Number) {
    let { data } = await this.httpService.get(`https://hacker-news.firebaseio.com/v0/${id}.json`).toPromise();
    return data;
  }

  findAll(): News[] {
    return this.collection;
  }

  findOne(id): News {
    return this.collection[id];
  }
}
