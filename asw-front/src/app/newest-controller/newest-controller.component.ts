import { Component, OnInit } from '@angular/core';
import { News } from '../modelos/News';
import { NewsService } from '../News-Service/news-service';

@Component({
  selector: 'app-newest-controller',
  templateUrl: './newest-controller.component.html',
  styleUrls: ['./newest-controller.component.css']
})
export class NewestControllerComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  news: News[] = []
  ngOnInit(): void {
    this.getNewest()
  }

  public async getNewest():Promise<News[]> {
    this.news=[]
    await this.newsService.getNewest().then(data => {
      this.news = data;
    })
    return this.news;
  }

}
