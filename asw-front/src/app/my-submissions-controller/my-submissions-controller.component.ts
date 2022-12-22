import { Component, OnInit } from '@angular/core';
import { News } from '../modelos/News';
import { MySubmissionsServiceService } from '../my-submissions-service/my-submissions-service.service';

@Component({
  selector: 'app-my-submissions-controller',
  templateUrl: './my-submissions-controller.component.html',
  styleUrls: ['./my-submissions-controller.component.css'],
})
export class MySubmissionsControllerComponent implements OnInit {
  constructor(private newsService: MySubmissionsServiceService) {}

  news: News[] = [];

  ngOnInit(): void {
    this.getMySubmissions();
  }

  public async getMySubmissions(): Promise<News[]> {
    this.news = [];
    await this.newsService.getMySubmissions().then((data) => {
      this.news = data;
    });
    return this.news;
  }
}
