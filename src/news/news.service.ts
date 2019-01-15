import { Injectable, HttpService } from '@nestjs/common';
import { Response } from './interfaces/response.interface';
import { StoryItem } from './interfaces/storyItem.interface';

@Injectable()
export class NewsService {
  private readonly apiAddress: string;

  constructor(private readonly httpService: HttpService) {
    this.apiAddress = 'https://hacker-news.firebaseio.com/v0';
  }

  async getTopList(): Promise<any> {
    const { data } = await this.httpService
      .get<Response>(`${this.apiAddress}/topstories.json`)
      .toPromise();
    return data;
  }

  async getItem(id: Number): Promise<any> {
    let { data } = await this.httpService
      .get<Response>(`${this.apiAddress}/item/${id}.json`)
      .toPromise();
    return data;
  }

  async getRandomTitle() {
    const list: Number[] = await this.getTopList();
    const len = list.length;
    if (!len) {
      return '';
    }
    const index = Math.floor(Math.random() * len);
    const item: StoryItem = await this.getItem(list[index]);
    return 'title' in item ? item.title : '';
  }
}
