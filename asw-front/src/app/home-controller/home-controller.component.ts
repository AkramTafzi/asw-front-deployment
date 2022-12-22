import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home-service/home.service';
import { News } from '../modelos/News';

@Component({
  selector: 'app-home-controller',
  templateUrl: './home-controller.component.html',
  styleUrls: ['./home-controller.component.css'],
})
export class HomeControllerComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  news: News[] = [];

  ngOnInit(): void {
    this.getNews();
  }

  public async getNews(): Promise<News[]> {
    this.news = [];
    await this.homeService.getNews().then((data) => {
      this.news = data;
    });
    return this.news;
  }
}
